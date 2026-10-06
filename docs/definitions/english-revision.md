# English definition revision

Revised literary devices, grammar, text types, reading procedures and lexical contrasts in English and Russian. The Russian vocabulary banks now give contextual equivalents for 76 distinct words.

52 named baseline blocks in each locale; 56 review entries; 6 explanatory diagrams.

The grammar uses the present/past inflection account while identifying common classroom labels. Literary effects require context, and PEEL is a scaffold rather than a guaranteed marking scheme.

Source metadata lives in `src/definitions/english.ts`. Each entry records the actual source language and named section; rewritten bilingual explanations and examples are editorial paraphrases, not official Russian quotations. The interface displays references alongside the relevant teaching content.

Visuals are used for comparisons, grammatical structure and time relationships. Individual word glosses, punctuation examples and existing conjugation/alphabet tables do not receive decorative pictures.

Validation: `node --test tests/languages-definitions-revision.test.mjs`; TypeScript check; production bundle with Vite’s runner config loader. The private review manifest records all baseline text occurrences, including retained-correct and non-definition decisions, plus source access limitations. No private teaching documents or personal details are added by these notes.
