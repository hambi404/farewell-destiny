/* ============================================================================
 *  THE CHRONICLE — Application
 * ========================================================================== */

(function () {
  "use strict";

  const data = window.CHRONICLE;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ==========================================================================
   *  1. Animated starfield + Traveler glow (canvas)
   * ======================================================================== */
  const StarField = (() => {
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");
    let w, h, dpr, stars, shooting, raf;

    // Glow color that eases toward the current era accent.
    let glow = { r: 233, g: 238, b: 247 };
    let glowTarget = { r: 233, g: 238, b: 247 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(innerWidth * dpr);
      h = canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      seed();
    }

    function seed() {
      const count = Math.min(420, Math.floor((w * h) / (9000 * dpr)));
      stars = [];
      for (let i = 0; i < count; i++) {
        const layer = Math.random(); // depth 0..1
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: 0.3 + layer * 1.4, // size / parallax
          tw: Math.random() * Math.PI * 2, // twinkle phase
          tws: 0.6 + Math.random() * 1.6, // twinkle speed
          drift: (0.02 + layer * 0.06) * dpr,
        });
      }
      shooting = [];
    }

    function setAccent(hex) {
      const c = hexToRgb(hex);
      if (c) glowTarget = c;
    }

    let last = 0;
    function frame(t) {
      const dt = Math.min((t - last) / 16.67, 3) || 1;
      last = t;
      ctx.clearRect(0, 0, w, h);

      // ease glow color
      glow.r += (glowTarget.r - glow.r) * 0.02;
      glow.g += (glowTarget.g - glow.g) * 0.02;
      glow.b += (glowTarget.b - glow.b) * 0.02;

      // Traveler glow — soft radial bloom near top-center
      const gx = w * 0.5;
      const gy = h * 0.32;
      const gr = Math.min(w, h) * 0.7;
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
      const { r, g, b } = glow;
      grad.addColorStop(0, `rgba(${r|0},${g|0},${b|0},0.10)`);
      grad.addColorStop(0.5, `rgba(${r|0},${g|0},${b|0},0.03)`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // stars
      for (const s of stars) {
        s.tw += 0.02 * s.tws * dt;
        s.y += s.drift * dt;
        if (s.y > h + 4) s.y = -4;
        const a = 0.35 + Math.abs(Math.sin(s.tw)) * 0.6;
        ctx.globalAlpha = a;
        ctx.fillStyle = `rgb(${r|0},${g|0},${b|0})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.z * dpr * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // shooting stars (rare)
      if (Math.random() < 0.004 && shooting.length < 2) {
        shooting.push({
          x: Math.random() * w,
          y: Math.random() * h * 0.5,
          vx: (4 + Math.random() * 4) * dpr,
          vy: (2 + Math.random() * 2) * dpr,
          life: 1,
        });
      }
      for (let i = shooting.length - 1; i >= 0; i--) {
        const m = shooting[i];
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        m.life -= 0.02 * dt;
        if (m.life <= 0) {
          shooting.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = m.life;
        ctx.strokeStyle = `rgb(${r|0},${g|0},${b|0})`;
        ctx.lineWidth = 1.4 * dpr;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 6, m.y - m.vy * 6);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(frame);
    }

    function start() {
      resize();
      addEventListener("resize", resize, { passive: true });
      if (reduceMotion) {
        // draw a single static frame
        frame(0);
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(frame);
      }
    }

    return { start, setAccent };
  })();

  /* ==========================================================================
   *  2. Helpers
   * ======================================================================== */
  function hexToRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m
      ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) }
      : null;
  }
  function rgba(hex, a) {
    const c = hexToRgb(hex);
    return c ? `rgba(${c.r},${c.g},${c.b},${a})` : hex;
  }
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
  }

  /* ==========================================================================
   *  3. Render the timeline
   * ======================================================================== */
  const timeline = document.getElementById("timeline");
  const rail = document.getElementById("rail");

  data.eras.forEach((era) => {
    const sec = el("section", "era reveal");
    sec.id = "era-" + era.id;
    sec.dataset.accent = era.accent;

    const quote = era.quote
      ? `<blockquote class="era-quote"><p>“${esc(era.quote.text)}”</p><cite>— ${esc(
          era.quote.by
        )}</cite></blockquote>`
      : "";

    const highlights = (era.highlights || [])
      .map((h) => `<li>${esc(h)}</li>`)
      .join("");

    sec.innerHTML = `
      <div class="era-marker">
        <span class="era-year">${esc(era.year)}</span>
        <span class="era-kicker">${esc(era.kicker)}</span>
      </div>
      <p class="era-date">${esc(era.date)}</p>
      <h2 class="era-title">${esc(era.title)}</h2>
      <p class="era-subtitle">${esc(era.subtitle)}</p>
      <p class="era-summary">${esc(era.summary)}</p>
      <ul class="era-highlights">${highlights}</ul>
      ${quote}
      <div class="artifacts-block"></div>
    `;
    timeline.appendChild(sec);

    // Exotic artifacts — icons are baked into data.js, so they render
    // instantly (images are lazy-loaded by the browser as they scroll in).
    const block = sec.querySelector(".artifacts-block");
    if (era.items && era.items.length) {
      block.innerHTML = `
        <p class="artifacts-head">Exotics of the Era</p>
        <div class="artifacts"></div>
      `;
      const grid = block.querySelector(".artifacts");
      era.items.forEach((item) => grid.appendChild(buildArtifact(item)));
    }

    // Rail entry
    const link = el("a");
    link.href = "#era-" + era.id;
    link.dataset.target = "era-" + era.id;
    link.innerHTML = `<span class="rail-dot"></span><span class="rail-label">${esc(
      era.year
    )} · ${esc(era.title)}</span>`;
    rail.appendChild(link);
  });

  /* ==========================================================================
   *  4. Memorial
   * ======================================================================== */
  (function renderMemorial() {
    const m = data.memorial;
    const node = document.getElementById("memorial");
    node.classList.add("reveal");
    node.dataset.accent = "#e9eef7";
    node.innerHTML = `
      <p class="mem-kicker">${esc(m.kicker)}</p>
      <h2 class="mem-title">${esc(m.title)}</h2>
      <div class="mem-lines">${m.lines
        .map((l) => `<p>${esc(l)}</p>`)
        .join("")}</div>
      <div class="mem-stats">${m.stats
        .map(
          (s) =>
            `<div class="mem-stat"><div class="v">${esc(
              s.value
            )}</div><div class="l">${esc(s.label)}</div></div>`
        )
        .join("")}</div>
      <p class="mem-farewell">${esc(m.farewell)}</p>
      <p class="mem-signoff">${esc(m.signoff)}</p>
    `;
  })();

  /* ==========================================================================
   *  5. Per-era theming + reveal + rail (IntersectionObserver)
   * ======================================================================== */
  const root = document.documentElement;
  function applyAccent(hex) {
    root.style.setProperty("--accent", hex);
    root.style.setProperty("--accent-soft", rgba(hex, 0.14));
    StarField.setAccent(hex);
  }

  // Reveal observer
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((n) => revealObs.observe(n));

  // Active-section observer (drives accent + rail)
  const sections = [...document.querySelectorAll("[data-accent]")];
  const railLinks = [...rail.querySelectorAll("a")];
  let currentId = null;
  const activeObs = new IntersectionObserver(
    (entries) => {
      // choose the most visible intersecting section
      let best = null;
      entries.forEach((e) => {
        if (
          e.isIntersecting &&
          (!best || e.intersectionRatio > best.intersectionRatio)
        )
          best = e;
      });
      if (!best) return;
      const sec = best.target;
      if (sec.id === currentId) return;
      currentId = sec.id;
      applyAccent(sec.dataset.accent);
      railLinks.forEach((l) =>
        l.classList.toggle("active", l.dataset.target === sec.id)
      );
    },
    { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -20% 0px" }
  );
  sections.forEach((s) => activeObs.observe(s));

  /* ==========================================================================
   *  6. Scroll progress bar
   * ======================================================================== */
  const fill = document.getElementById("scroll-progress-fill");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.body.scrollHeight - innerHeight;
      fill.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
      ticking = false;
    });
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ==========================================================================
   *  7. Live API — manifest badge + artifacts
   * ======================================================================== */
  const badge = document.getElementById("manifest-badge");
  const badgeText = document.getElementById("manifest-text");

  (async function manifest() {
    if (!BungieAPI.hasKey) {
      badge.hidden = false;
      badge.querySelector(".dot").style.background = "#e0a93c";
      badge.querySelector(".dot").style.boxShadow = "0 0 10px #e0a93c";
      badgeText.textContent = "Add a Bungie API key for the live manifest seal";
      return;
    }
    badge.hidden = false;
    try {
      const v = await BungieAPI.getManifestVersion();
      badgeText.textContent = v
        ? "Live · Bungie Manifest " + shortenVersion(v)
        : "Connected to the Bungie API";
    } catch (err) {
      badge.querySelector(".dot").style.background = "#e0492f";
      badge.querySelector(".dot").style.boxShadow = "0 0 10px #e0492f";
      badgeText.textContent = "Bungie API unreachable — showing the archive";
    }
  })();

  function shortenVersion(v) {
    // Manifest versions are long hashes; show a tidy fragment.
    const parts = String(v).split(/[._]/);
    return parts.slice(0, 3).join(".");
  }

  // light.gg item URLs are "/db/items/{hash}/{kebab-name}/", e.g.
  // https://www.light.gg/db/items/1345867570/sweet-business/
  function slugify(s) {
    return String(s)
      .toLowerCase()
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function lightggURL(item) {
    return (
      "https://www.light.gg/db/items/" +
      item.hash +
      "/" +
      slugify(item.name) +
      "/"
    );
  }

  function buildArtifact(item) {
    const a = el("a", "artifact");
    a.href = lightggURL(item);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", item.name + " — view on light.gg");

    if (item.icon) {
      const img = el("img", "artifact-icon");
      img.src = item.icon;
      img.alt = "";
      img.loading = "lazy";
      // If a baked icon path ever 404s, fall back to the rune placeholder.
      img.addEventListener("error", () => {
        img.replaceWith(el("span", "artifact-icon placeholder", "◈"));
      });
      a.appendChild(img);
    } else {
      a.appendChild(el("span", "artifact-icon placeholder", "◈"));
    }

    a.appendChild(el("span", "artifact-name", esc(item.name)));
    const ext = el("span", "artifact-ext", "↗");
    ext.setAttribute("aria-hidden", "true");
    a.appendChild(ext);
    return a;
  }

  /* ==========================================================================
   *  8. Ambient soundtrack — "Deep Stone Lullaby"
   * ======================================================================== */
  (function ambient() {
    const audio = document.getElementById("ambient");
    const toggle = document.getElementById("audio-toggle");
    const label = document.getElementById("audio-label");
    const TARGET_VOL = 0.5;
    let available = true;
    let userPaused = false;
    let fadeTimer = null;

    audio.addEventListener("error", () => {
      available = false;
      toggle.classList.add("unavailable");
      toggle.classList.remove("playing");
      label.textContent = "Add deep-stone-lullaby.mp3";
      toggle.setAttribute(
        "aria-label",
        "Soundtrack file missing — add assets/audio/deep-stone-lullaby.mp3"
      );
    });

    function fadeTo(target, done) {
      clearInterval(fadeTimer);
      fadeTimer = setInterval(() => {
        const diff = target - audio.volume;
        if (Math.abs(diff) < 0.04) {
          audio.volume = Math.max(0, Math.min(1, target));
          clearInterval(fadeTimer);
          if (done) done();
        } else {
          audio.volume = Math.max(0, Math.min(1, audio.volume + diff * 0.12));
        }
      }, 40);
    }

    // The toggle's visual state mirrors the REAL <audio> element via its
    // events — so it can never claim to be playing while the browser has
    // actually blocked autoplay.
    audio.addEventListener("playing", () => {
      toggle.classList.add("playing");
      toggle.setAttribute("aria-pressed", "true");
      fadeTo(TARGET_VOL);
    });
    audio.addEventListener("pause", () => {
      toggle.classList.remove("playing");
      toggle.setAttribute("aria-pressed", "false");
    });

    function play() {
      if (!available) return;
      audio.volume = 0;
      const p = audio.play();
      // Swallow the rejection if autoplay is blocked; the "playing" event will
      // light the button only once sound is actually coming out.
      if (p && p.catch) p.catch(() => {});
    }

    function pause() {
      fadeTo(0, () => audio.pause());
    }

    toggle.addEventListener("click", () => {
      if (!available) return;
      if (audio.paused) {
        userPaused = false;
        play();
      } else {
        userPaused = true;
        pause();
      }
    });

    // Browsers block autoplay-with-sound until a user gesture, so begin the
    // soundtrack on the first real interaction anywhere — except clicks on the
    // toggle itself, which manage their own state.
    function autostart(e) {
      if (toggle.contains(e.target)) return;
      if (!available || userPaused || !audio.paused) return;
      play();
    }
    addEventListener("pointerdown", autostart);
    addEventListener("keydown", autostart);

    // "Always play": try to start the soundtrack immediately on load. If the
    // browser blocks autoplay-with-sound, the first interaction above starts
    // it instead. The toggle can always pause/resume it.
    play();
  })();

  /* ==========================================================================
   *  9. Boot
   * ======================================================================== */
  // Set hero span from data
  const span = document.getElementById("hero-span");
  if (span && data.meta) span.textContent = `${data.meta.spanStart} — ${data.meta.spanEnd}`;

  StarField.start();
  applyAccent(data.eras[0].accent);
})();
