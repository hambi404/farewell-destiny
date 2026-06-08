/* ============================================================================
 *  THE CHRONICLE — Bungie API client
 * ----------------------------------------------------------------------------
 *  A tiny, dependency-free wrapper around the public Bungie.net Platform API.
 *  Only one read-only, key-authenticated endpoint is used:
 *
 *    GET /Destiny2/Manifest/   -> live manifest version (the authenticity badge)
 *
 *  Item icons, names and hashes are resolved ahead of time and baked into
 *  data.js (Bungie's old SearchDestinyEntities endpoint now returns NotFound),
 *  so rendering the timeline needs no runtime item lookups.
 *
 *  The Bungie API supports CORS for browser requests, so all of this runs
 *  client-side on GitHub Pages. Results are cached in localStorage to stay
 *  well within rate limits across visits.
 * ========================================================================== */

const BungieAPI = (() => {
  const ROOT = "https://www.bungie.net";
  const BASE = ROOT + "/Platform";
  const cfg = window.CHRONICLE_CONFIG || {};
  const KEY = (cfg.BUNGIE_API_KEY || "").trim();
  const PLACEHOLDER = "PASTE-YOUR-BUNGIE-API-KEY-HERE";

  const hasKey = KEY.length > 0 && KEY !== PLACEHOLDER;

  // ---- localStorage cache (versioned, fails silent in private mode) --------
  const CACHE_PREFIX = "chronicle.v2.";
  const cache = {
    get(k) {
      try {
        const raw = localStorage.getItem(CACHE_PREFIX + k);
        return raw ? JSON.parse(raw) : null;
      } catch (_) {
        return null;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(CACHE_PREFIX + k, JSON.stringify(v));
      } catch (_) {
        /* quota / private mode — ignore */
      }
    },
  };

  // ---- core request --------------------------------------------------------
  async function request(path) {
    const res = await fetch(BASE + path, {
      method: "GET",
      headers: { "X-API-Key": KEY },
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const json = await res.json();
    if (json.ErrorCode && json.ErrorCode !== 1) {
      throw new Error(json.ErrorStatus || "Bungie error " + json.ErrorCode);
    }
    return json.Response;
  }

  // ---- public endpoints ----------------------------------------------------

  /** Live manifest version string, e.g. "2026.xx.xx...". */
  async function getManifestVersion() {
    if (!hasKey) return null;
    const cached = cache.get("manifestVersion");
    // Manifest version changes rarely; cache for a day.
    if (cached && Date.now() - cached.t < 24 * 3600 * 1000) return cached.v;
    const resp = await request("/Destiny2/Manifest/");
    const v = resp && resp.version ? resp.version : null;
    if (v) cache.set("manifestVersion", { v, t: Date.now() });
    return v;
  }

  return { hasKey, getManifestVersion };
})();
