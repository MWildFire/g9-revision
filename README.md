# MYP Revision Hub

A bilingual EN/RU study hub with subject archives, dated assessment packs and November 2026 MYP preparation. Independent study resource; not an official IB or school publication.

- Main site: https://lukalearningportal.academy/
- November preparation: https://lukalearningportal.academy/#/november
- Repository: https://github.com/MWildFire/g9-revision
- GitHub Pages is disabled. The repository contains the cleaned public source history; private source material is kept separately.
- Content standards: [revision workflow](docs/content-revision/README.md) and [review checklist](docs/content-revision/REVIEW-CHECKLIST.md).
- Source coverage and limitations: [completeness inventory](docs/definitions/completeness/README.md) and [curriculum map](docs/review/curriculum-map.md).

## Current content and scope

Eight subject modules cover Mathematics, Physics, Chemistry, Biology, Geography, English, French and optional Arabic. They include explanations, original practice, worked responses, simulations and local progress. The November plan and the earlier `/#/mocks` coverage map are separate views; the older Grade 9, September and October materials remain dated archives.

The current preparation plan retains the confirmed mock week of **9–13 November 2026**, a core-revision target of **4 November** and a content-readiness target of **6 November**. The plan records the confirmed subject levels; exact Arabic registration/scope and unresolved subject-list details must not be inferred from these dates. Historical uncertainty in the September/October reviews is not a new decision to cancel the November timetable.

The existing plan has 34 days and 65 portions. Preserve their IDs, dates, order and minutes, the 150-minute daily cap, recovery buffers and protected Saturdays. Tutor time replaces the corresponding study block. Completion reflects understanding and an independent attempt, rather than elapsed time. A delayed release does not create extra catch-up workload.

Original rehearsal papers and listening exercises already exist. Biology rehearsal is 120 minutes; Physics and Chemistry rehearsal are 100 minutes each. Training choices and authored marking guidance do not establish official exam duration or validated school mark schemes. Synthetic listening audio and browser pronunciation remain labelled as such; their existence is not proof of native-speaker validation. A topic link, a completed batch file or passing tests does not certify complete source coverage or editorial acceptance.

## Dated subject packs

- [Physics · September 2026](https://lukalearningportal.academy/#/physics-september-2026): atomic-structure lessons, models, practice and reference material. Its practice marks do not automatically convert to IB criterion levels. See [pack documentation](docs/physics-september-2026/README.md).
- [Geography · tectonic hazards](https://lukalearningportal.academy/#/geography-tectonic-hazards): lessons, original practice, diagrams, glossary and printable guide. Case studies and their source limitations are documented in [coverage and verification](docs/geography-tectonic-hazards/README.md).

These archives remain available for revision; their historical scope claims do not replace current subject verification.

## Development

Use Node 24 to match CI (the package engine accepts Node 22.18+). Create an isolated working copy; keep local environments, caches and generated evidence outside tracked product files.

```sh
npm ci
npm test
npm run dev -- --host 127.0.0.1
npm run build
npm run preview -- --host 127.0.0.1
```

The default Vite build uses `/g9-revision/`. The AWS build uses `--base=/ --outDir dist-aws`, matching the domain root. HashRouter preserves the existing hash routes and deep links. Subject code and translations load on demand.

## Publication and verification

The existing workflow runs on pushes to `main`. It uses Node 24, a clean install, tests, the default build and a root-base AWS artifact, followed by the configured AWS deployment. Feature-branch pushes and pull requests are not workflow triggers. The workflow also contains a manual trigger; it is not part of the approved release procedure. Do not use the retained legacy manual Pages script.

As checked on **15 October 2026**, the cleaned public repository has **no CI runs**. Its first successful CI/AWS deployment and the live identity of a new candidate remain unverified. An accessible domain may still serve the previous version. Local builds and independent review are separate from publication and deployment.

Release requires an independently reviewed exact candidate, explicit release authorization, the ordinary workflow result, an artifact tied to its commit, successful AWS deployment and rendered root/deep-route checks against that artifact. GitHub Pages remains off. Do not change infrastructure, settings or student data as a side effect of a documentation or content change.

## Data and provenance

- Existing `g9-*`, `arabic:*`, `geography-tectonic-hazards-v1`, `physics-september-2026-v1`, `math-term-1-2026-v1` and `myp-mocks-2026-exam-date` storage keys and formats must remain compatible.
- Answers, confidence, error logs and progress stay in the browser. Clearing browser data removes saved progress; nothing synchronizes across devices.
- Existing audio bytes are preserved. No analytics or backend is added; external resource links and fonts may make third-party requests.
- Private documents, student work, books, personal information and access codes must not enter the public repository or PR metadata.
- [HANDOFF.md](HANDOFF.md) and the [September review](docs/review/2026-09-28.md) are historical records. Current content standards and dated verification evidence take precedence for new work.
