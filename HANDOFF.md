# G9 Revision Hub — Project Handoff

A multi-subject revision site for Luka's **Grade 9 IB MYP End-of-Year (EOY) exams in June 2026** at NLCS Dubai. Bilingual (English + Russian), hosted on GitHub Pages. Replaces a worse "physics-revision" v1 prototype that lives in the parent directory.

---

## Quick links

- **Live site**: <https://mwildfire.github.io/g9-revision/>
- **GitHub repo**: <https://github.com/MWildFire/g9-revision> (owner: `MWildFire`)
- **Local path**: `/Users/mvstrike/PhysicsExamProject/g9-revision/`
- **Parent dir** (also contains source PDFs and the old physics-revision v1): `/Users/mvstrike/PhysicsExamProject/`
- **Default exam date**: 2026-06-15 (configurable in the Timetable page UI; stored in localStorage)

---

## Who is this for

**Luka** — a Grade 9 student preparing for the EOY exams in June 2026. The user (his parent) drives content updates. The site is meant to be the **ultimate self-contained study tool**: every topic should have enough depth that the student doesn't need to Google or refer to other notes.

User's stated quality bar (paraphrased): *"each topic should be revealed deeply so all necessary information can be taken directly from the site, not having to google anywhere else."*

---

## Tech stack

- **Framework**: React 18 + TypeScript + Vite 5
- **Routing**: `react-router-dom` v6 with **HashRouter** (required for GitHub Pages static hosting — URLs look like `/#/biology/cells`)
- **i18n**: `react-i18next` with **namespace-per-subject** (one JSON file per subject per language)
- **Styling**: Tailwind CSS with a custom beige/warm palette (CSS variables defined in `src/index.css`)
- **Charts**: Recharts (line graphs, bar charts in simulations)
- **Math typesetting**: KaTeX (`react-katex`) — used in Math module
- **Maps**: Leaflet + `react-leaflet` (Geography case studies)
- **Drag & drop**: `@dnd-kit/core` (Timetable planner)
- **Animations**: Framer Motion (page transitions, simulation transitions)
- **Icons**: `lucide-react`
- **Dates**: `date-fns` with `ru` and `enUS` locales

---

## Hosting and deployment

- **Hosted on GitHub Pages**, served at `https://mwildfire.github.io/g9-revision/`.
- **`vite.config.ts`** sets `base: '/g9-revision/'` so all asset URLs resolve correctly under that path.
- **Deploy is automatic**: every push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci` → `npm run build` → uploads `dist/` artifact → deploys to Pages. Takes ~45 seconds.
- **No backend.** Everything is client-side. State persists in `localStorage` only.
- **There is also** a `deploy:manual` script using `gh-pages` (`npm run deploy:manual`) as a fallback, but the Actions workflow is the canonical deploy path.

---

## Repo layout

```
g9-revision/
├── .github/workflows/deploy.yml        # GitHub Actions deploy to Pages
├── HANDOFF.md                          # This file
├── package.json                        # Deps + scripts (dev / build / preview)
├── vite.config.ts                      # base: '/g9-revision/'
├── tailwind.config.ts, postcss.config.js, tsconfig.json
├── index.html
├── public/                             # Static assets (favicon etc.)
└── src/
    ├── main.tsx                        # Entry: HashRouter wraps App, imports i18n
    ├── App.tsx                         # Top-level routes (1 route per subject module + Hub/Timetable/About)
    ├── index.css                       # Tailwind directives + custom CSS variables for palette
    │
    ├── config/
    │   ├── subjects.ts                 # SUBJECTS array — id, iconName, accent, route, topicsCount, etc.
    │   ├── routes.ts                   # Route constants
    │   └── examDate.ts                 # Default 2026-06-15, localStorage-backed
    │
    ├── components/
    │   ├── ui/                         # Reusable atoms: Card, Button, Slider, Tabs, TermCard, LanguageToggle, etc.
    │   ├── layout/                     # Header, Footer, SubjectSidebar, MobileNav
    │   ├── content/                    # Page content building blocks ⬇
    │   │   ├── DetailedCard.tsx        # ★ THE pattern for deep content (see below)
    │   │   ├── TopicHero.tsx           # Big topic title at top of every topic page
    │   │   ├── SectionHeading.tsx
    │   │   ├── TermsGrid.tsx           # Physics "key terms" grid pattern
    │   │   ├── FormulaCheatsheet.tsx
    │   │   ├── PracticeQuestions.tsx
    │   │   ├── MathPracticeList.tsx
    │   │   ├── DrFrostLink.tsx         # Pill linking to drfrost.org
    │   │   ├── ActiveRecallBlock.tsx   # "Hide model answer" pattern for Geography
    │   │   ├── ExtrasLayout.tsx        # Wraps the "Extras (beyond G9)" pages — shared across subjects
    │   │   └── ExternalEmbed.tsx
    │   ├── progress/                   # ProgressDot, SubjectProgress, ExamCountdown
    │   └── simulations/                # Interactive widgets per subject ⬇
    │       ├── physics/                # 25 interactive sims (Ohm's law, motion graphs, etc.)
    │       ├── math/                   # Quadratic explorer, sequence generator, etc.
    │       ├── chemistry/              # EnergyProfile, etc.
    │       ├── biology/                # CellDiagram, HeartDiagram, PunnettSquare
    │       └── geography/              # BradshawModel, ButlerModel, StormHydrograph, EnsoToggle, etc.
    │
    ├── modules/                        # One folder per subject — each has index.tsx (Routes+Sidebar) + pages/
    │   ├── physics/   (4 main topics + extras + criteria + commandTerms + resources)
    │   ├── math/      (5 main topics + EOY practice + criteria trainer + extras)
    │   ├── chemistry/ (8 main topics + extras)
    │   ├── biology/   (7 main topics + extras — Photosynthesis is the most recently added)
    │   ├── english/   (8 main topics: Macbeth, Exam Format, Progress Test, Text Types, Devices, Grammar, Reading, Essays + extras)
    │   ├── french/    (6 main topics + extras)
    │   ├── arabic/    (5 main topics + extras)
    │   └── geography/ (4 main topics + Fieldwork + Extras)
    │
    ├── pages/                          # Top-level (non-subject) pages
    │   ├── HubPage.tsx                 # "/" — the 8 subject cards + ExamCountdown + Timetable preview
    │   ├── TimetablePage.tsx           # "/timetable" — weekly planner with topic library
    │   └── AboutPage.tsx               # "/about"
    │
    ├── i18n/
    │   ├── index.ts                    # i18next setup, namespace registry, language detector
    │   ├── en/  (10 namespaces: common, hub, math, physics, chemistry, biology, english, french, arabic, geography)
    │   └── ru/  (same 10 namespaces — mirror of EN)
    │
    ├── hooks/
    │   ├── useLocalProgress.ts         # ★ Global localStorage state hook (see "State management" below)
    │   ├── useExamCountdown.ts
    │   ├── useLocalState.ts
    │   └── useAnimationFrame.ts
    │
    └── lib/
        ├── storage.ts                  # GlobalState type + load/save + markTopic helpers
        ├── physics.ts                  # Physics formulas (acceleration, ohm, etc.)
        ├── math.ts                     # Math helpers (solveQuadratic, surd simplify)
        └── drFrost.ts                  # buildDrFrostUrl (now just points to drfrost.org homepage)
```

---

## The 8 subjects

| ID | Display | Topics | Notes |
|---|---|---|---|
| `math` | Mathematics | 5 main topics (number-systems, functions-algebra, sequences, geometry-trig, stats-prob) + EOY Practice + Criteria Trainer + Extras | Has 9+ interactive simulations, Dr Frost task links per sub-topic, textbook refs |
| `physics` | Physics | 4 main topics (force-motion, forces-energy, electricity, waves-optics) + Command Terms + Criteria + Resources + Extras | 25 interactive simulations. Each topic page has Key Terms grid + Deeper Concepts (detailed cards) + Sims + Formulas + Practice |
| `chemistry` | Chemistry | 8 main topics (atoms-periodic, bonding, reactions, stoichiometry, acids-bases, atmosphere, rates, energy) + Extras | EnergyProfile sim |
| `biology` | Biology | **7** main topics (cells, body-systems, **photosynthesis**, ecology, genetics, immune, experiment) + Extras | Photosynthesis added 2026-05-20 after teacher Kyle Neil clarified the exam syllabus. CellDiagram, HeartDiagram, PunnettSquare sims |
| `english` | English | 8 main topics (macbeth, exam-format, progress-test, text-types, devices, grammar, reading, essays) + Extras | Macbeth has scene-by-scene guiding questions |
| `french` | French | 6 main topics (units, vocab, tenses, grammar, phrases, text-types) + Extras | Level toggle (Emergent/Capable/Proficient) — partial wiring |
| `arabic` | Arabic | 5 main topics (mrs-hala, alphabet, vocab, grammar, phrases) + Extras | RTL-aware grammar examples |
| `geography` | Geography | 4 main topics (rivers, tourism, resource-reliance, atmospheric-hazards) + Fieldwork + Extras | Most simulation-heavy after physics — Bradshaw model, Butler model, ENSO toggle, atmospheric circulation, storm hydrograph |

Subject config lives in **`src/config/subjects.ts`**. The `topicsCount` here drives the home-page progress bar denominator (e.g., "0 / 7"), so it must equal the actual number of MAIN topics in the sidebar (not counting Home/Extras/Criteria-style auxiliary pages).

---

## The `DetailedCard` content pattern (★ important)

This is the central content schema used across all subjects. **Every topic that needs depth should use this.**

### Schema (i18n JSON)

```json
"someTopic": {
  "name": "Short title",
  "rule": "Main explanation — the rule, definition, or core concept (1-3 sentences).",
  "examples": ["Concrete example 1.", "Concrete example 2.", "Concrete example 3."],
  "tip": "Optional pro tip or memory aid.",
  "watchOut": "Optional warning about a common mistake.",
  "use": "Optional — used in English grammar tenses to say WHEN to use it.",
  "form": "Optional — used in English grammar for the structural form."
}
```

### Render

```tsx
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const item = t(`some.path.detailed.key`, { returnObjects: true }) as DetailedItem;
<DetailedCard item={item} borderColor="var(--color-accent-sage)" labels={labels} />
```

`labels` is optional — passing Russian labels (`{ examples: 'Примеры', tip: 'Подсказка', ... }`) localises the section headings inside the card. Pages compute `labels` from `i18n.language` and pass them down.

### Wrapper layouts

Each subject has a topic-layout wrapper that supports both legacy short content AND new detailed content:

- `src/modules/biology/components/BiologyTopicLayout.tsx` — exports `InfoSection` accepting `body`, `items`, OR `detailedItems`
- `src/modules/chemistry/components/ChemistryTopicLayout.tsx` — exports `ChemSection` similarly
- `src/modules/math/components/MathTopicLayout.tsx` — auto-detects `subTopicsDetailed` block and renders via DetailedCard, falls back to plain `subTopics`
- `src/components/content/ExtrasLayout.tsx` — used across all subjects' Extras tabs; `ExtraSection` also supports `detailedItems`

**Migration pattern** when expanding content: add a `detailed: { key1: {...}, key2: {...} }` block ALONGSIDE the existing `items` or `body`, then update the page to pass `detailedItems={...}` instead of `items={...}`. The wrappers render both, so it's backward compatible during migration.

---

## i18n architecture

- **Namespace per subject** — each subject has its own JSON file in `src/i18n/en/<subject>.json` and `src/i18n/ru/<subject>.json`. Plus shared `common.json` and `hub.json`.
- **Components specify the namespace**: `useTranslation('biology')`, `useTranslation('common')`. Forgetting this is a real bug — it caused the [physics i18n breakage](#known-issue-physics-sim-namespace) where simulation files were loading from `common` instead of `physics`.
- **Language toggle** is in the header (`LanguageToggle`). User choice is stored in localStorage via i18next's language detector.
- **Russian translations must be ACTUAL Russian.** A recurring problem: when adding content, it's easy to copy EN text into RU files and forget to translate. The user has flagged this multiple times. Always verify RU files have Russian text under Russian keys.
- **RU pluralisation**: `common.json` uses `_one`, `_few`, `_many`, `_other` for grammatically correct day/week counts.

---

## State management

Single client-side global store in `localStorage` under key `g9-revision-state`. Schema in `src/lib/storage.ts`:

```ts
type GlobalState = {
  progress: { [subjectId]: { [topicId]: { viewed, completed, lastVisited } } };
  timetable: { entries: TimetableEntry[] };  // for the planner
  french: { level?: 'emergent' | 'capable' | 'proficient' };
  activeRecall: { [topicId]: { [blockId]: string } };  // user-written notes
};
```

### The `useLocalProgress` hook (★ important)

```ts
const [state, update] = useLocalProgress();
```

Reads from localStorage on mount. `update(s => next)` writes to localStorage AND dispatches a custom `g9-revision-state-update` window event so OTHER instances of the same hook (in different components on the same page) re-read the state immediately.

**Why the custom event**: the native `storage` event only fires cross-tab, not within the same tab. Without the custom event, toggling a topic complete in the planner would not update the home-page progress bar until you navigated away and back.

### How planner-progress sync works

The planner's `toggleEntry(id)` (in `TimetablePage.tsx`) does two writes:
1. Flips `state.timetable.entries[i].completed`.
2. Sets `state.progress[subjectId][topicId].completed = true` IF any entry for that (subject, topic) pair is now completed.

So a topic shows as completed on the home page if it's been ticked off in ANY planner slot.

---

## The Planner / Timetable (`/timetable`)

- Weekly grid Mon–Sun, **2 weeks BEFORE today** plus weeks forward until the exam date (capped at 16 weeks).
- Left sidebar = **Topics library**, dynamically built from a hardcoded `TOPIC_LIBRARY` array in `TimetablePage.tsx`. **When you add a new topic to a subject, add it here too** or it won't be schedulable. Currently lists: math (5), physics (4), chemistry (8), biology (7), english (8), french (6), arabic (5), geography (4) = 47 entries.
- Click a topic → click a day → that topic is scheduled on that day. Click the check icon to mark complete (which also syncs to home page progress as above). Hover to reveal the × delete button.
- **All UI strings are localised** via `common.timetable.*` keys.
- Exam date picker in top-right; writes to `localStorage` and refires the countdown hook.

---

## What's been done — high-level timeline

The git log tells the story; here are the key milestones (most recent first):

1. **Biology EOY syllabus alignment** (2026-05-20, commit `b410daa`) — added microscopes, eukaryotic vs prokaryotic, nutrition (balanced diet), aerobic/anaerobic respiration + exercise response, **Photosynthesis & Biotechnology** as a new 7th main topic, communicable vs non-communicable diseases, speciation/evidence-for-evolution. Driven by teacher Kyle Neil's posted exam scope.
2. **Planner improvements** (commits `e210cf9`, `7759655`) — show 2 weeks before today; full topic library (all subjects, not just math/physics/geography); localised the previously-hardcoded English UI in the planner; wired planner toggle → home page progress sync; corrected topicsCount in subjects.ts.
3. **Mass content expansion** (commits `070fd38`, `ab37096`, `55d9089`, `50d60c7`, `4e87e3a`) — converted "shallow bullet" content across all subjects to `DetailedCard` schema. Math (47 sub-topics), Physics concepts (24 deep cards across 4 topics), Geography (tourism case studies, fieldwork, resource reliance, atmospheric hazards), English text types + literary devices, Chemistry atmosphere + bonding + energy, Biology body systems, Arabic dialects + literature, Math proofs, Physics thermodynamics.
4. **Physics i18n fix** (commit `75363c5`) — all 25 physics simulation files were calling `useTranslation()` (defaulting to `common` namespace) but their keys lived in `physics`. Bulk sed fix.
5. **Dr Frost links + simulations** (commit `26e7066`).
6. **Teacher document integration** (commit `99a0342`).
7. **Initial build** (commit `6719c90`).

---

## Known gaps / things NOT yet done

The user listed these as "next round" items but they weren't completed:

- **Biology ecology, original-genetics body sections, immune barriers/vaccination/antibiotics** — still have one-line `body` fields, never migrated to `detailed`.
- **French unit vocabulary, text types, extras** — French is mostly scaffold-quality content. Vocabulary lists are flat arrays.
- **English Macbeth themes/quotes/acts** — still flat string arrays; would benefit from per-scene detailed cards.
- **English progressTest, exam format details, extras** — still flat lists.
- **Chemistry stoichiometry, acids-bases, rates secondary sections** — only some sub-sections migrated to detailed.
- **Physics resources page** — still has one-line `desc` per resource.
- **Math extras (calculus, complex numbers, statsExt)** — still single `body` strings.

### Dr Frost links — known limitation

`drfrostmaths.com` migrated to `drfrost.org` and now requires a sign-in to access individual skills. We can't deep-link any more, so `DrFrostLink` pills open the Dr Frost homepage and display the Skill ID for the student to paste into Dr Frost's search. The hint text lives at `common.sections.drFrostHint`.

### Biology school Google Sites iframe

The Biology home page links to four Google Sites pages (one per Criterion). These open in a new tab — they're not embedded as iframes, because some browsers/devices block third-party iframes on schools' Google Sites.

---

## Known issue archive (for context)

### Physics sim namespace
All 25 files under `src/components/simulations/physics/*` once called `useTranslation()` with no argument. The default namespace is `common`, but their keys live in `physics`. Result: every simulation showed raw keys like `forceMotion.sim2.title`, `common.reset` etc. Fixed by `sed`-replacing across all 25 files. **Watch out** — when copying a simulation as a template, the new file might forget the namespace too.

### Hardcoded English in the planner
First version had `"Topics library"`, `"Click a topic..."`, `"Week"`, `"EOY date:"` etc. hardcoded as English literals. Now in `common.timetable.*` (EN+RU).

### Topic library missing subjects
First version of the planner only listed math/physics/geography topics + one "overview" placeholder for biology/english/french/arabic/chemistry. Now lists all 47 actual topics.

### Home page progress not updating
First version: marking a topic complete in the planner wrote only to `state.timetable.entries`, not to `state.progress`. Home page progress bars read from `state.progress`, so nothing changed visibly. Fixed by writing both AND by adding the custom-event mechanism in `useLocalProgress`.

---

## Local dev workflow

```bash
cd /Users/mvstrike/PhysicsExamProject/g9-revision
npm install                  # First-time
npm run dev                  # http://localhost:5173/g9-revision/
```

To test the production build locally:
```bash
npm run build
npm run preview              # http://localhost:4173/g9-revision/
```

TypeScript check (no emit):
```bash
npx tsc --noEmit
```

Validating a single JSON file (catches accidental breakage after a big edit):
```bash
node -e "JSON.parse(require('fs').readFileSync('src/i18n/en/biology.json','utf8')); console.log('OK')"
```

Deploy: `git push origin main` — GitHub Actions does the rest. **No manual deploy needed.**

---

## Conventions / style preferences from the user

- **No emoji in content** unless explicitly requested.
- **Russian translation must be REAL Russian** — not transliterated, not left in English. Multiple corrections logged on this front.
- **Depth over breadth** — "the ultimate study tool, not a list of links". Bullet-list content should be expanded to `DetailedCard` schema unless it's intentionally a checklist (e.g., MYP criteria checklists are deliberately flat lists).
- **Commit messages** are descriptive, multi-paragraph. The user follows the work via GitHub commit history.
- **Co-Authored-By: Claude** trailers are accepted and used.

---

## How to add a new topic to a subject (cheat sheet)

Worked example: adding a new `genetics-deep` topic to Biology.

1. **i18n EN + RU**: in `src/i18n/{en,ru}/biology.json`, add a `geneticsDeep` block (title, intro, sections with `detailed` cards).
2. **nav key**: add `"geneticsDeep": "..."` to the `nav` block in both biology.json files.
3. **Create page**: `src/modules/biology/pages/GeneticsDeepPage.tsx`. Use `BiologyTopicLayout` + `InfoSection` with `detailedItems`. See `PhotosynthesisPage.tsx` as template.
4. **Wire route**: import the new page in `src/modules/biology/index.tsx`, add to both `TOPICS` (sidebar) and `Routes` (`<Route path="genetics-deep" ...>`).
5. **Home card**: in `src/modules/biology/pages/BiologyHomePage.tsx`, add to the `TOPICS` array.
6. **Bump topicsCount**: in `src/config/subjects.ts`, `biology.topicsCount: 7` → `8`.
7. **Planner library**: in `src/pages/TimetablePage.tsx`, add to the `TOPIC_LIBRARY` array.
8. **Update intro count**: home page intro mentions "Seven core topics" → bump to "Eight".

The planner expansion (`useLocalProgress` cross-component sync) means new topics show up everywhere immediately.

---

## What this conversation was about

This `HANDOFF.md` was created at the end of a long Claude Code session where we:

- Expanded shallow content across **every subject** to the `DetailedCard` schema, on the user's request "ВО ВСЕХ предметах" (in ALL subjects).
- Fixed multiple Russian-translation gaps (English placeholder text under Russian keys).
- Fixed the broken Physics module after a namespace mismatch.
- Built out Geography's tourism, fieldwork, resource reliance, and atmospheric hazards into full case-study cards.
- Made the Timetable planner actually functional: complete topic library, full localisation, and home-page progress sync.
- Extended the planner to show 2 weeks before today.
- Aligned the Biology module with teacher Kyle Neil's posted EOY exam scope: added microscopes, eukaryotic/prokaryotic, balanced diet, aerobic/anaerobic respiration + exercise response, **a new Photosynthesis & Biotechnology topic**, communicable vs non-communicable diseases, speciation.

Everything described above is currently live at <https://mwildfire.github.io/g9-revision/>.
