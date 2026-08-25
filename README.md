# Survey Campaign Builder

A simplified survey campaign builder built as a frontend assignment. Configure a
survey from **Content** and **Styling** tabs and see every change reflected instantly
in a **live mobile preview** — no save/refresh button required.

## Tech Stack

- React.js (functional components + Hooks)
- Vite
- Plain CSS (no framework, one global stylesheet using CSS variables)
- React Context API for state management (no external state library)

## Setup Instructions

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> /dist
npm run preview   # preview the production build locally
```

No environment variables or backend are required — everything runs client-side and
state lives in memory (per the assignment brief).

## Folder Structure

```
src/
  context/
    SurveyContext.jsx     # single source of truth: content + styling state, and every mutator
    defaultState.js        # initial shape of "content" and "styling"
  utils/
    id.js                  # id generator for questions/options/conditions
    pathUtils.js            # generic get/set-by-path helper used by the Styling tab
    styleHelpers.js         # converts styling state -> real CSS for the preview
  components/
    layout/                # Header, TabBar
    shared/                 # reusable form controls: TextField, NumberField, ColorInput,
                             # SelectField, ToggleSwitch, FontStyleToggles, AlignmentButtons,
                             # BoxInputs (margins/corner radius), Section (collapsible panel)
    content/                # Content tab: Introduction, Questions (+ Options, Logic), Thank You
    styling/                 # Styling tab: Appearance, Text style, Option list, Comment,
                             # CTA button, Cross button, Thank You styling
    preview/                 # Live mobile preview: phone frame, question screen, thank-you screen
  App.jsx
  main.jsx
  styles/global.css
```

## Design Decisions

- **State management**: a single `SurveyProvider` (React Context) holds two state
  objects — `content` and `styling` — plus mutator functions. Every input in the
  Styling tab is driven by a small `path`-based updater (`updateStyling(['ctaButton',
  'colors', 'background'], value)`), so adding a new style field never requires a new
  setter function.
- **Reusable style panels**: `TextStylePanel`, `ButtonStylePanel` and
  `OptionStateFields` are generic components reused across Question Title/Subtitle,
  Thank You Title/Subtitle, CTA/Thank-You buttons, and Selected/Unselected option
  styling — instead of duplicating the same ~10 fields five times.
- **Dynamic questions**: changing "Number of Survey Pages" in the Introduction panel
  adds/removes entries in `content.questions` immediately, and the mobile preview
  clamps its own position if the current page is removed.
- **Live preview**: the preview reads directly from `content` and `styling` via
  context — there is no explicit "apply" step, so every keystroke/toggle re-renders
  the phone instantly.
- **Logic / conditional redirect**: implemented as a mock, per the assignment ("Mock
  implementation is acceptable") — users can add "If option X → redirect to page Y"
  rules, stored in state, but they don't currently change preview navigation.

## Deployment Link

_Add your live deployment URL (Vercel/Netlify/etc.) here after deploying._

## What Was Skipped / Simplified

- Lottie playback isn't rendered in the preview (the file is accepted and stored,
  but only image types are actually drawn) — a full Lottie player was out of scope
  for the assignment's time budget.
- Conditional logic is a mock UI (per the brief) and does not drive real preview
  navigation.
