# G9 Revision Hub

Multi-subject revision hub for G9 EOY 2026 — built with React 18 + TypeScript + Vite, deployed to GitHub Pages.

## Live URL

After first deploy: `https://<your-github-username>.github.io/g9-revision/`

## What's inside

- **Hub** (`/`) — landing with 7 subject cards, exam countdown, timetable shortcut
- **Math** (`/math/*`) — 5 topics (Number Systems, Functions & Algebra, Sequences, Geometry & Trig, Stats & Prob), Dr Frost task links, 5 interactive simulations, ~60 practice problems with worked solutions, EOY Practice, Criteria Trainer
- **Physics** (`/physics/*`) — 4 topics with 25 simulations, Command Terms, MYP Criteria, Practice Questions (migrated from Plan v1)
- **Geography** (`/geography/*`) — 4 revision sheets (Rivers, Tourism, Resource Reliance, Atmospheric Hazards) with Bradshaw / Butler / ENSO interactives + Active Recall
- **Biology** (`/biology/*`) — external Google Sites links + RU/EN glossary
- **Chemistry / English / French** — scaffolds with planned topic lists
- **Timetable** (`/timetable`) — click-to-add weekly planner, persists in localStorage
- **i18n** — RU and EN, persisted in localStorage

## Local development

```bash
npm install
npm run dev
# Opens http://localhost:5173/g9-revision/
```

## Build

```bash
npm run build
npm run preview
# Opens http://localhost:4173/g9-revision/
```

## Deploying to GitHub Pages

1. **Create a public GitHub repo named `g9-revision`** (this name matches `base` in `vite.config.ts`).
2. **In repo Settings → Pages → Source**, choose **GitHub Actions**.
3. Locally, init git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: G9 Revision Hub"
   git branch -M main
   git remote add origin https://github.com/<your-username>/g9-revision.git
   git push -u origin main
   ```
4. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically — wait ~2 minutes, then visit `https://<your-username>.github.io/g9-revision/`.

If you use a different repo name, update `base: '/g9-revision/'` in `vite.config.ts`.

## Changing the EOY date

Default is **2026-06-15**. Override in the Timetable page (input box at the top) — saved to localStorage.

Or edit defaults in `src/config/examDate.ts`.

## Architecture

```
src/
├── config/          subjects.ts, routes.ts, examDate.ts
├── components/
│   ├── ui/          Card, Button, Slider, Tabs, ...
│   ├── layout/      Header, SubjectSidebar, BreadcrumbsNav, Footer
│   ├── content/     TermsGrid, FormulaCheatsheet, PracticeQuestions, DrFrostLink,
│   │                ExternalEmbed, MathFormula, WorkedSolution, ActiveRecallBlock,
│   │                MathPracticeList
│   ├── progress/    ExamCountdown, SubjectProgress, ProgressDot
│   └── simulations/
│       ├── physics/   (25 simulations from Plan v1)
│       ├── math/      QuadraticExplorer, StandardFormConverter,
│       │              SequenceGenerator, SectorSegmentCalc, BoxPlotBuilder
│       └── geography/ BradshawModel, ButlerModel, EnsoToggle
├── modules/
│   ├── physics/     index + pages + data
│   ├── math/        index + pages + data (drFrost, textbookRefs, practiceProblems)
│   ├── geography/   index + pages
│   ├── biology/     iframe wrapper + glossary
│   ├── chemistry/   scaffold
│   ├── english/     scaffold
│   └── french/      scaffold + level toggle
├── pages/           HubPage, TimetablePage, AboutPage
├── i18n/            index.ts + en/{namespace}.json + ru/{namespace}.json
├── hooks/           useLocalState, useAnimationFrame, useLocalProgress, useExamCountdown
└── lib/             physics.ts, math.ts, drFrost.ts, storage.ts
```

Each subject lives in its own `modules/{subject}/` folder with its own `index.tsx` route entry. Adding a new subject means:
1. Add to `src/config/subjects.ts`
2. Add an i18n namespace in `src/i18n/{en,ru}/{subject}.json` and register in `src/i18n/index.ts`
3. Create `src/modules/{subject}/index.tsx` with routes
4. Add `<Route path="/{subject}/*" element={<Module />} />` in `src/App.tsx`

## Open TODOs (from plan)

- Confirm exact Dr Frost task URL — currently `https://www.drfrostmaths.com/practise-skill.php?skid={n}`
- Confirm Biology Google Sites URL — currently the v2 plan placeholder
- Fill in Chemistry / English / French content when revision booklets become available
- Optionally add Leaflet maps for Geography case studies
- Code-split the bundle (currently ~1.8MB un-split)

## Tech stack

React 18 · TypeScript · Vite 5 · Tailwind · react-router-dom v6 (HashRouter) · i18next · Framer Motion · Recharts · KaTeX · lucide-react · date-fns · @dnd-kit (optional, currently unused).

## Privacy

No analytics. No tracking. No backend. All progress is in your browser's localStorage.
