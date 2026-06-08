# Ambient soundtrack

Place the background track here as:

```
assets/audio/deep-stone-lullaby.mp3
```

The site looks for exactly that filename. "Deep Stone Lullaby" (Beyond Light OST,
composed by Michael Salvatori, Skye Lewin & Pyxis) is © Bungie — it is **not**
bundled with this project. Supply your own copy.

If the file is absent, the player gracefully shows a small hint instead of
crashing, and the rest of the site works normally.

> Tip: a `.ogg` fallback can be added by dropping `deep-stone-lullaby.ogg` here
> and adding a second `<source>` line in `index.html`.
