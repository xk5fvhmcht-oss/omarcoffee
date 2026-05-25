# Omar Coffee — Pour Over

> *Pour slow. Think less. Drink well.*

A coffee calculator and brew timer. Built by someone who brews and enjoys coffee.

🫖 [Open the app](https://xk5fvhmcht-oss.github.io/omarcoffee/)

---

## What it does

Two things, cleanly:

1. **Calculator** — set your brewer, how much you want to drink, roast level. The app tells you exactly how much coffee to grind, how much water to boil, what grind setting to use, and what temperature to target.

2. **Brew timer** — step-by-step guide through the brew with a live countdown ring, chimes at every pour or step transition, and a running water total. Screen stays on while brewing (Wake Lock).

---

## Brewers

### Hario V60
Pour over, cone dripper. Paper filter. Two techniques:

**Classic 4-Pour** — bloom + 3 pours. Total brew time ~3–4 minutes.
1. Bloom — 2× coffee weight, 30–45 seconds
2. Pour 1 — 45% of remaining water, slow spiral
3. Pour 2 — 30% of remaining water
4. Pour 3 — final 25%, let it drain

**Four-Six Method** (Tetsu Kasuya, 2016 World Brewers Cup) — 5 pours at 45-second intervals.
- First 40% of water: controls sweetness and acidity (adjustable split)
- Last 60% of water: controls strength (2, 3, or 4 pours)
- Uses coarser grind than classic V60

### Chemex 8-cup
Pour over, carafe. Thick bonded paper filter — slower drawdown, coarser grind. Bloom + 2 pours. Total brew time ~5–6 minutes.

### French Press
Immersion brew. Metal mesh — no paper filter. All water added at once, steep, press. Pour immediately after pressing. Steep time adjustable: 3, 4, or 5 minutes.

---

## The math

### Brew water ≠ cup yield

**Pour over (V60, Chemex):** Paper filter grounds absorb roughly **2× their weight** in water. With 20g coffee, ~40g stays in the puck. To get 300g in your cup, you brew with 340g of water.

**French press:** Metal mesh retains much less — roughly **1× coffee weight**. With 20g coffee, ~20g stays in the grounds.

```
Pour over:   coffee = yield ÷ (ratio − 2)
French press: coffee = yield ÷ (ratio − 1)
brew water = coffee × ratio
```

### Input modes

**By cups** (default) — set how many cups and what size, app derives everything.
- Cups: 1–7
- Cup sizes: Small (180cc) · Standard (250cc) · Large mug (350cc)
- V60/Chemex default: 4 cups · French press default: 7 cups

**By grams of coffee** — set your exact coffee weight, app shows brew water and expected yield. Slider 15–75g plus numeric input field.

---

## Grind settings — Breville Smart Grinder Pro (BCG820)

Filter zone on the BCG820 is settings 31–50. French press sits above that.

| Brewer | Roast | Setting | Coarseness |
|---|---|---|---|
| V60 Classic | Light | 40 | Medium-coarse |
| V60 Classic | Medium | 38 | Medium |
| V60 Classic | Dark | 36 | Medium |
| V60 Four-Six | Light | 42 | Coarse |
| V60 Four-Six | Medium | 40 | Medium-coarse |
| V60 Four-Six | Dark | 38 | Medium |
| Chemex | Light | 48 | Coarse |
| Chemex | Medium | 46 | Coarse |
| Chemex | Dark | 44 | Medium-coarse |
| French Press | Light | 54 | Extra coarse |
| French Press | Medium | 52 | Coarse |
| French Press | Dark | 50 | Coarse |

These are starting points. Finer if sour or weak. Coarser if bitter. One setting at a time.

---

## Water temperature

| Roast | Temp | Notes |
|---|---|---|
| Light | 96°C / 205°F | Near-boiling. Extracts delicate aromatics. |
| Medium | 93°C / 200°F | Off boil, rest 30–45 seconds. |
| Dark | 91°C / 196°F | Let the kettle cool ~90 seconds. |

Off the base, your kettle loses ~1–2°C per minute. Pour within 2 minutes of hitting your target.

---

## Brew timer

- Live elapsed clock
- Current step card — name, water amount, technique note
- Countdown ring — drains in real time between steps
- Audio chimes at each step transition (Web Audio API, works offline)
- Mutable sound (🔔/🔕 toggle)
- Running water totals — poured vs remaining
- Wake Lock — screen stays on while brewing
- Step list with done / active / upcoming states
- French press done state: "Pour immediately — don't let it sit"
- Pour over done state: "Drink well"

---

## Brew journal

- Save after every brew — tap "Save to journal" on the done screen
- **Next time adjuster** — tap grind finer / coarser and/or more / less coffee
- Free-text notes field
- Up to 20 brews saved, newest first
- Journal cards show next-time reminder badge if set
- **Brew again** — reloads all settings instantly, flashes a reminder toast if next-time adjustments were saved
- Export — copies to clipboard; selectable text overlay fallback for iOS PWA
- Delete individual entries

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete app — single file, all HTML/CSS/JS |
| `sw.js` | Service worker — offline caching, PWA |
| `apple-touch-icon.png` | Home screen icon (180×180) |
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
| v1.0 | Initial release — V60 calculator, 4-pour, Four-Six, brew timer, chimes |
| v1.1 | By-cups and by-grams input modes · Grind settings corrected to real V60 range |
| v1.2 | Audio context iOS fix · Wake Lock (screen stays on while brewing) |
| v1.3 | Brew journal — save, reload, export · Journal icon in header |
| v1.4 | Chemex 8-cup brewer · Brewer tile selector · Correct card order |
| v1.5 | French Press · Steep timer · Brewer-aware retention math · Grind table extended |
| v1.6 | Next-time adjuster (grind/coffee) · Reminder toast on Brew again · French press done message · Bloom pill fix |

---

## Coming next

- Aeropress
- Tasting notes with structured fields

---

*Built with Claude · Anthropic*
*By Omar — who brews and enjoys coffee.*
