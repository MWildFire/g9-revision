# MYP Revision Hub

Bilingual EN/RU revision for Grade 10 mocks in October 2026, built on Luka's Grade 9 materials. Independent study resource; not an official IB publication.

- Existing public site: https://mwildfire.github.io/g9-revision/
- Repository: https://github.com/MWildFire/g9-revision
- Local checkout: `/Users/mvstrike/Projects/g9-revision`
- Current work: `codex/october-myp-review` (local; not published)
- Review and remaining gaps: [September review](docs/review/2026-09-28.md)
- Source-by-source coverage: [Curriculum map](docs/review/curriculum-map.md)

## Current content

Eight subject modules: Mathematics, Physics, Chemistry, Biology, Geography, English, French and Arabic. Existing explanations, practice, simulations and local progress are preserved.

The new `/#/mocks` page contains 79 coverage entries, with filters, source labels and 18 additional bilingual lessons. Each new lesson includes an explanation, original practice, a worked response and a self-check. General science investigation and interdisciplinary preparation are included.

School Grade 9 documents, an undated Grade 9+10 Mathematics list and public IB/NLCS sources are distinguished. **None of these establishes the exact October mock scope.** The exact date, subject coverage, Mathematics level, French level and any IDL mock still require school confirmation. No exam date is invented. Older EOY and Macbeth pages are labelled historical.

A topic link is not a claim of complete textbook coverage. Genuine listening audio, complete timed papers with validated marking, and session-specific material remain outstanding. Student progress is not a measure of curriculum completeness or an IB grade.

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

Every push to `main` triggers `.github/workflows/deploy.yml`: clean install, regression tests, production build and GitHub Pages deployment. The September work has not been pushed or deployed. Inspect the changes and confirm the intended release before updating the public branch.

## Data and provenance

- Progress, planner entries and French preference: `g9-revision-state` in localStorage.
- October date: `myp-mocks-2026-exam-date`; the old June key is retained but not used for this cycle.
- Arabic practice retains its existing `arabic:` keys.
- Nothing synchronizes across devices. Clearing browser data removes saved progress.
- No analytics or backend. Existing Google Fonts and external resource links make third-party requests.
- Private source documents, student work and assessment access codes are not included in the public source dataset.
- Current content metadata: `src/data/mocks.json`.
- `HANDOFF.md` is historical implementation context; the current review takes precedence.
