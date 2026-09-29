# Physics · September 2026

This dedicated Grade 10 criterion-A preparation pack follows the supplied PiXL Atomic structure overview photo received on 29 September 2026. It is separate from October mocks. The month names the pack; no exact test date or school paper format is inferred.

Route: `#/physics-september-2026`.

## Coverage ledger

Every row has a bilingual explanation, interactive model, two worked examples, four original practice questions with hints and marking points, and common mistakes.

| Supplied topic | Lesson route |
|---|---|
| Structure of an atom | atomic-structure |
| Mass number, atomic number and isotopes | isotopes |
| Development of the atomic model | atomic-models |
| Radioactive decay and nuclear radiation | radiation |
| Nuclear equations | nuclear-equations |
| Half lives and random nature of decay | half-life |
| Radioactive contamination | contamination |
| Background radiation | background |
| Different half lives of radioactive isotopes | half-life-choice |
| Uses of nuclear radiation | uses |
| Nuclear fission | fission |
| Nuclear fusion | fusion |

The slide's “physics only HT” annotation is retained as provenance, not used as an IB level or a reason to omit topics. Relative-atomic-mass averages, the decay constant and mass–energy calculations are labelled supporting material/extensions where the slide does not establish that calculation requirement.

## Assessment design

- Criterion A is represented through explanation, application to familiar/unfamiliar contexts, and evidence-supported judgment. The question's strand label indicates the main skill; integrated questions can exercise more than one.
- 48 practice questions, plus two original eight-question papers with 40 marking points each. Suggested practice time is 50 minutes, not a claim about the school test.
- Solutions are hidden until opened. Papers initially hide all solutions and hints, provide an optional timer, and allow point-by-point self-marking after review.
- A practice score does not automatically map to an IB 1–8 criterion level. Equivalent scientifically correct reasoning is accepted; the school's teacher rubric remains authoritative.
- English and Russian use the same question IDs, calculations and marking points. User answers and lesson ticks use a separate localStorage key; nothing is uploaded or synchronized.

## Models and scientific checks

Eight original interactive models: atom/ion counts, qualitative scattering, penetration comparison, nuclear equations, expected/random decay, contamination versus irradiation, average fission branching, and D–T fusion particle accounting. Models explicitly label qualitative assumptions, scale limitations, average values and non-engineering scope.

Review checks included beta-minus charge signs, antineutrino bookkeeping, nucleon-count versus exact-mass distinction, background subtraction before half-life ratios, unequal counting intervals, non-integer decay times, equal activity versus equal nucleus count, contamination versus irradiation, moderator versus control rods/coolant, and solar fusion versus the D–T example. Medical numerical examples are hypothetical teaching calculations, not clinical dosing recommendations.

Seven public primary references are linked with their purpose on the `reference` page. The photo is retained privately with the project record; no third-party question paper or photo is published. All teaching prose, examples, questions and visuals in this pack are newly authored.

## Verification

- TypeScript and Vite production build.
- Twelve automated tests including the six existing regression tests: topic/bilingual/mark integrity, decay arithmetic, nuclear balances, stochastic model boundaries and saved-state handling.
- Browser QA: all 17 new pages in English and Russian, plus 11 legacy entry routes; eight interactive types; answers and completion retained; filter/search; paper answer gating, timer start/pause, self-marking; print visibility; mobile direct navigation/overflow; malformed and denied browser storage.
- Visual review of desktop overview, decay visualization, Russian mobile overview and nuclear-equation model.

Release evidence is held privately in the LukaStudies workspace under `work/physics-september-2026/`. Public release is performed by the existing GitHub Pages workflow after tests and build. Temporary local preview is stopped after live verification.

Dedicated hosting/custom domain remains deferred in `docs/BACKLOG.md`.
