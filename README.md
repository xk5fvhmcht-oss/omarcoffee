# Omar Coffee — Pour Over

> *Pour slow. Think less. Drink well.*

A pour over coffee calculator and brew timer. Built by someone who brews and enjoys coffee.

🫖 [Open the app](https://xk5fvhmcht-oss.github.io/omarcoffee/)

---

## What it does

Two things, cleanly:

1. **Calculator** — you tell it how you're brewing, it tells you exactly how much coffee to grind, how much water to boil, and what grind setting to use on your Breville Smart Grinder Pro.

2. **Brew timer** — step-by-step guide through the brew with a live countdown ring, chimes at every pour, and a running water total so you always know where you are.

---

## The math

### Brew water ≠ cup yield

This is the most important thing the app gets right. V60 grounds absorb roughly **2× their weight in water** — that water stays in the puck and never reaches your cup. So if you want 300g in your cup with 20g of coffee, you need to brew with 340g of water, not 300g.

The formula:

```
coffee = yield ÷ (ratio − 2)
brew water = coffee × ratio
retention = coffee × 2
cup yield = brew water − retention
```

The app lets you work from either direction:
- **By cups** — set how many cups and what size, it derives everything else
- **By grams** — set your coffee weight directly, it shows you brew water and expected yield

---

## Input modes

### By cups (default)
- Cups: 1–7, default 4 (people like refills)
- Cup sizes: Small (180cc) · Standard (250cc) · Large mug (350cc)

### By grams of coffee
- Slider: 15g–75g
- Numeric input field for exact entry
- Live yield calculation shown inline

---

## Brew methods

### Classic 4-Pour
Bloom + 3 pours. The standard V60 approach.

1. **Bloom** — 2× coffee weight, 30–45 seconds. Degasses the coffee, sets up even extraction.
2. **Pour 1** — 45% of remaining water. Centre outward spiral.
3. **Pour 2** — 30% of remaining water. Keep it centred.
4. **Pour 3** — final 25%. Let it drain fully.

Total brew time: ~3–4 minutes depending on grind and bloom duration.

### Four-Six Method
Tetsu Kasuya's 2016 World Brewers Cup winning technique. Five pours at 45-second intervals.

- **First 40% of water** — split across 2 pours, controls sweetness and acidity
  - Equal split → balanced
  - Smaller first pour → sweeter
  - Larger first pour → more acidity
- **Last 60% of water** — split across 2, 3, or 4 pours, controls strength
  - 2 pours → lighter
  - 3 pours → medium (Kasuya's default)
  - 4 pours → stronger

Uses a coarser grind and slightly lower water temperature than classic V60.

---

## Grinder settings — Breville Smart Grinder Pro (BCG820)

The BCG820 has 60 settings. Espresso lives at 1–20. Filter/pour over sits in the 31–50 range. V60 lands in the middle of that.

| Method | Roast | Setting | Description |
|---|---|---|---|
| Classic V60 | Light | 40 | Medium-coarse |
| Classic V60 | Medium | 38 | Medium — classic starting point |
| Classic V60 | Dark | 36 | Medium — slightly finer |
| Four-Six | Light | 42 | Coarse — Kasuya's deliberate choice |
| Four-Six | Medium | 40 | Medium-coarse |
| Four-Six | Dark | 38 | Medium |

These are starting points. Adjust finer if the cup is sour or weak. Adjust coarser if it's bitter. One setting at a time.

---

## Water temperature

| Roast | Temp | Notes |
|---|---|---|
| Light | 96°C / 205°F | Near-boiling. Extracts delicate aromatics. |
| Medium | 93°C / 200°F | Off boil, rest 30–45 seconds. |
| Dark | 91°C / 196°F | Let the kettle cool ~90 seconds. |

Temperature is advisory. The app notes that once your kettle is off its base, it loses roughly 1–2°C per minute — pour within 2 minutes of hitting your target temp.

---

## Bloom

Bloom water = 2× coffee weight. Pour slowly in concentric circles, saturating all grounds. Fresh beans will bloom dramatically — that's CO₂ releasing. Older beans bloom less; that's fine.

Bloom duration: 20–60 seconds, adjustable. 30s standard, 45s for very fresh beans.

---

## Brew timer

- Live elapsed clock
- Current step highlighted with pour amount and technique note
- Countdown ring drains in real time between pours
- Audio chimes at each pour transition (Web Audio API, no library, works offline)
- Mute button
- Running water totals — poured vs remaining
- Full step list with done / active / upcoming states
- "Drink well." on completion

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete app — single file, all HTML/CSS/JS |
| `sw.js` | Service worker — offline caching, PWA |
| `apple-touch-icon.png` | Home screen icon |
| `README.md` | This file |

---

## Install on iPhone

1. Open in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Always open from the home screen icon

Works fully offline after first load.

---

## Version history

| Version | Changes |
|---|---|
| v1.0 | Initial release — calculator, 4-pour, Four-Six, brew timer, chimes |
| v1.1 | By-cups and by-grams input modes · Grind settings corrected to real V60 range · New language |

---

## Coming next

- Brew journal — save notes from each brew, reload settings
- French Press
- Chemex
- Aeropress

---

*Built with Claude · Anthropic*  
*By Omar — who brews and enjoys coffee.*
