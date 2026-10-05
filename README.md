# MYP Revision Hub

Luka's bilingual EN/RU study hub: subject archives, dated assessment packs and Grade 10 October mocks preparation. Independent study resource; not an official IB publication.

- Public site: https://mwildfire.github.io/g9-revision/
- October preparation map: https://mwildfire.github.io/g9-revision/#/mocks
- Repository: https://github.com/MWildFire/g9-revision
- Local checkout: `/Users/mvstrike/Projects/g9-revision`
- Release branch: `main`; GitHub Pages serves the site without a local server.
- Review and remaining gaps: [September review](docs/review/2026-09-28.md)
- Source-by-source coverage: [Curriculum map](docs/review/curriculum-map.md)

## Current content

Eight subject modules: Mathematics, Physics, Chemistry, Biology, Geography, English, French and Arabic. Existing explanations, practice, simulations and local progress are preserved.

The new `/#/mocks` page contains 79 coverage entries, with filters, source labels and 18 additional bilingual lessons. Each new lesson includes an explanation, original practice, a worked response and a self-check. General science investigation and interdisciplinary preparation are included.

School Grade 9 documents, an undated Grade 9+10 Mathematics list and public IB/NLCS sources are distinguished. **None of these establishes the exact October mock scope.** The exact date, subject coverage, Mathematics level, French level and any IDL mock still require school confirmation. No exam date is invented. Older EOY and Macbeth pages are labelled historical.

A topic link is not a claim of complete textbook coverage. Genuine listening audio, complete timed papers with validated marking, and session-specific material remain outstanding. Student progress is not a measure of curriculum completeness or an IB grade.


## Physics · September 2026

[Open the dedicated pack](https://mwildfire.github.io/g9-revision/#/physics-september-2026). It covers all 12 bullets in the supplied Atomic structure overview: 12 detailed bilingual lessons, 24 worked examples, 48 practice questions, eight interactive model types, two original 40-mark practice papers, a formula guide and glossary. This is separate from October mocks. Practice marks do not convert automatically to an IB criterion level.

Sources and scope are visible in the pack's reference page. Content is newly authored; the supplied photograph and third-party papers are not republished. Answers and completion ticks remain in the browser. Dedicated hosting/custom domain is deferred in [the backlog](docs/BACKLOG.md); GitHub Pages remains the active target.

## Geography tectonic hazards

[Open the dedicated pack](https://mwildfire.github.io/g9-revision/#/geography-tectonic-hazards). All ten unique objectives in the supplied Tectonic Hazards checklist are covered by 13 detailed bilingual lessons, 13 worked examples, 39 practice questions, annotated diagrams, a 40-term glossary and a complete printable guide. The three cases are Chile 2010, Nepal 2015 and Eyjafjallajökull 2010, with causes, impacts and management. Sources and case-year interpretation are explicit. See [coverage and verification](docs/geography-tectonic-hazards/README.md).

## Development

Use Node 22.18+ (CI uses Node 24).

```sh
npm ci
npm test
npm run dev -- --host 127.0.0.1
npm run build
npm run preview -- --host 127.0.0.1
```

Vite base is `/g9-revision/`. HashRouter keeps GitHub Pages deep links working. Subject code and translations load on demand. Changing the repository path requires updating `vite.config.ts`.

## Publication

Every push to `main` triggers `.github/workflows/deploy.yml`: clean install, regression tests, production build and GitHub Pages deployment. Verify the workflow and rendered public site after publishing. Local development and preview servers are optional and can be stopped after verification.

## Data and provenance

- Progress, planner entries and French preference: `g9-revision-state` in localStorage.
- October date: `myp-mocks-2026-exam-date`; the old June key is retained but not used for this cycle.
- Arabic practice retains its existing `arabic:` keys.
- Tectonic hazards uses its own `geography-tectonic-hazards-v1` key for answers and review ticks.
- Nothing synchronizes across devices. Clearing browser data removes saved progress.
- No analytics or backend. Existing Google Fonts and external resource links make third-party requests.
- Private source documents, student work and assessment access codes are not included in the public source dataset.
- Current content metadata: `src/data/mocks.json`.
- `HANDOFF.md` is historical implementation context; the current review takes precedence.
