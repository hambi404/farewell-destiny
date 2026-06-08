# The Chronicle — A Monument to Destiny 2

An interactive museum of Destiny 2 (2017–2026). Scroll through every era — from
**The Red War** to **The Final Shape** and the Episodes beyond — with iconic
exotic artifacts pulled **live from the Bungie Armory** as you go, and a
closing memorial for the end of an era.

Pure static site — HTML, CSS and vanilla JavaScript. No build step. Runs on
GitHub Pages.

---

## ✦ Features

- **Cinematic timeline** — one monumental section per expansion, with a fixed
  era rail, scroll progress, and a starfield "Traveler" glow that shifts color
  to match each era.
- **Bungie-sourced exotics** — each era's iconic exotics are shown with their
  real in-game icons (resolved from the Bungie Manifest and baked into
  `data.js`, so they load instantly with no per-icon API calls). Click any
  weapon to open its full page on **[light.gg](https://www.light.gg/)**.
- **Ambient soundtrack** — "Deep Stone Lullaby" loops in the background and
  starts automatically, with a tasteful equalizer toggle (bring your own MP3 —
  see setup).
- **Live manifest badge** — fetches the current Bungie Manifest version as a
  seal of authenticity.
- **Works without a key** — the full timeline, icons and light.gg links all
  render even without an API key; only the live manifest badge needs one.
- **Responsive** and respects `prefers-reduced-motion`.

---

## ✦ Setup

### 1. Get a Bungie API key (free)

1. Go to <https://www.bungie.net/en/Application> and sign in.
2. **Create New App.**
3. Set **OAuth Client Type** to *Not Applicable* (we only read public data).
4. Set the **Website** and **Redirect URL** to your GitHub Pages URL
   (e.g. `https://YOURNAME.github.io/destiny2-chronicle/`) — any valid URL works
   for a read-only key.
5. Copy the generated **API Key**.

### 2. Add the key

Open `assets/js/config.js` and paste the key:

```js
window.CHRONICLE_CONFIG = {
  BUNGIE_API_KEY: "your-key-here",
  LOCALE: "en",
};
```

> ⚠️ On a static site this key is visible in the public source. That's fine for
> a read-only, rate-limited Bungie key — but treat it as public. You can revoke
> or rotate it anytime from the Bungie application page.

### 3. Add the soundtrack (optional)

Drop your own copy of the track at `assets/audio/deep-stone-lullaby.mp3`. The
track is © Bungie and is not bundled here; if the file is missing, the player
simply shows a small hint and everything else works. See
`assets/audio/README.md`.

### 4. Run locally

Just open `index.html`, or serve it (recommended, so the API calls have an origin):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## ✦ Deploy to GitHub Pages

```bash
cd destiny2-chronicle
git init
git add .
git commit -m "The Chronicle — a monument to Destiny 2"
git branch -M main
git remote add origin https://github.com/YOURNAME/destiny2-chronicle.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from
a branch → `main` / root**. Your site goes live at
`https://YOURNAME.github.io/destiny2-chronicle/` within a minute or two.

(The included `.nojekyll` file tells Pages to serve the folder as-is.)

---

## ✦ Customizing the content

All text and the list of artifacts live in **`assets/js/data.js`** — edit era
summaries, highlights, quotes, or the `items` arrays (artifacts are looked up by
name, so just use the in-game name).

---

## ✦ How the API is used

Only read-only, key-authenticated public endpoints — no OAuth, no user data:

| Purpose            | Endpoint                                                  |
| ------------------ | --------------------------------------------------------- |
| Manifest version | `GET /Destiny2/Manifest/` |

That single call powers the authenticity badge. Each weapon's hash, name and
icon path were resolved from the Manifest ahead of time and baked into
`data.js`; the hash also builds its light.gg link
(`https://www.light.gg/db/items/{hash}/{slug}/`).

> Bungie's old `SearchDestinyEntities` ("Armory search") endpoint now returns
> `NotFound`, which is why items are referenced by hash rather than by name.

Results are cached in `localStorage` to stay comfortably within rate limits.

---

## ✦ Disclaimer

A fan-made tribute. Destiny 2, the Traveler, and all related marks are property
of **Bungie, Inc.** This project is not affiliated with or endorsed by Bungie.
All item data and imagery is served live from the public Bungie.net API.

*Eyes up, Guardian.*
