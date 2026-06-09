# Omar Coffee

> *Pour slow. Think less. Drink well.*

A coffee calculator and brew timer for V60, Chemex, and French press. Built by someone who brews and enjoys coffee.

🫖 [Open the app](https://xk5fvhmcht-oss.github.io/omarcoffee/)

---

## What it does

1. **Calculator** — pick your brewer, how much you want to drink, and your roast. The app gives you exact coffee weight, brew water, Breville Smart Grinder Pro setting, and water temperature.

2. **Brew timer** — step-by-step with a live countdown ring, chimes at every transition, cumulative scale targets, and a screen that stays on while you brew.

---

## Brewers

| | Hario V60 02 | Chemex 8-cup | French Press |
|---|---|---|---|
| Type | Pour over | Pour over | Immersion |
| Filter | Paper cone | Thick bonded paper | Metal mesh |
| Techniques | Classic 4-Pour · Four-Six | Bloom + 2 pours | Steep & press |
| Default ratio | 1:15 | 1:16 | 1:14 |
| Default batch | 1 mug | 4 cups | 6 cups |
| Bloom | 30s (45s fresh beans) | 45s | None |
| Retention | 2× coffee weight | 2× coffee weight | 1× coffee weight |
| Comfort zone | ≤ 30g coffee | ≤ 55g | ≤ 60g |
| Hard cap | 50g | 70g | 80g |

**Four-Six** (Tetsu Kasuya, 2016 World Brewers Cup): 5 pours at 45s intervals. First 40% of water controls sweetness/acidity, last 60% controls strength (2/3/4 pours). Coarser grind, 1°C lower water temperature. No separate bloom — the first pour serves that purpose.

**French press:** steep 3–5 minutes (default 4), press slowly, pour immediately.

---

## Serving sizes — proper names

- **Cup — 120cc** — the traditional coffee cup, and the unit Hario rates its drippers by
- **Mug — 240cc** — the everyday 8 oz mug
- **Large mug — 350cc**

The count slider follows your selected size ("2 mugs", "4 cups") and is capped so the resulting coffee dose never exceeds the brewer's hard limit. Between the comfort zone and the hard cap, a warning appears — the brew will work, but expect slower drawdown and possible overflow.

---

## The math

Grounds retain water, so brew water ≠ cup yield:

```
Pour over:    coffee = yield ÷ (ratio − 2)    [paper filter retains ~2× coffee weight]
French press: coffee = yield ÷ (ratio − 1)    [metal mesh retains ~1×]
brew water  = coffee × ratio
```

Two input modes: **by cups** (count × size → everything derived) or **by grams** (exact coffee weight, slider capped at the brewer's hard limit).

---

## Grind settings — Breville Smart Grinder Pro (BCG820)

| Brewer | Light | Medium | Dark |
|---|---|---|---|
| V60 Classic | 40 | 38 | 36 |
| V60 Four-Six | 42 | 40 | 38 |
| Chemex | 48 | 46 | 44 |
| French Press | 54 | 52 | 50 |

Starting points. Finer if sour or weak, coarser if bitter, one setting at a time.

## Water temperature

| Roast | Temp |
|---|---|
| Light | 96°C / 205°F |
| Medium | 93°C / 200°F |
| Dark | 91°C / 196°F |

Four-Six: subtract 1°C. Off the base, kettles lose ~1–2°C per minute — pour within 2 minutes.

---

## Brew timer

- Cumulative scale targets — "pour until scale reads 340g" as the hero number, plus per-step amounts in every list
- Countdown ring with m:ss display for long steps
- Chimes at every transition (Web Audio, iOS-safe unlock + keepalive)
- Wake Lock — screen stays on while brewing
- **Background brewing** — leave the timer screen and it keeps running; an amber ☕ pill in the header shows the countdown and taps back to the timer; "Start Brewing" becomes "Continue Brew"
- Silent-mode reminder on first arrival each brew
- Brewer-specific done messages

## Brew journal

- Save after each brew with free-text notes
- **Next time adjuster** — grind finer/coarser, more/less coffee — shown as a badge on the card and flashed as a toast when you "Brew again"
- Brewer icon on each card
- Up to 20 entries, reload settings instantly, export to clipboard (iOS overlay fallback)

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete app — single file |
| `sw.js` | Service worker — network-first HTML so updates apply immediately, offline fallback |
| `apple-touch-icon.png` | Home screen icon |

## Install on iPhone

Safari → Share → Add to Home Screen. Works offline after first load.

---

## Version history

| Version | Changes |
|---|---|
| v1.0 | V60 calculator, 4-pour, Four-Six, brew timer, chimes |
| v1.1 | By-cups / by-grams modes · grind settings corrected to real V60 range |
| v1.2 | iOS audio unlock · Wake Lock |
| v1.3 | Brew journal |
| v1.4 | Chemex · brewer tiles · card order fix |
| v1.5 | French Press · steep timer · brewer-aware retention |
| v1.6 | Next-time adjuster · reminder toast |
| v1.7 | Background brewing · Continue Brew · silent-mode warning · network-first SW |
| v1.8 | Proper serving names (Cup/Mug/Large mug) · realistic defaults · two-tier capacity limits |
| v1.9 | Grams slider brewer-aware · bloom hidden in Four-Six · Four-Six −1°C implemented · legacy journal size snap · journal brewer icons · cleanup |

## Coming next

- Aeropress
- Structured tasting notes

---

*Built with Claude · Anthropic*
*By Omar — who brews and enjoys coffee.*
