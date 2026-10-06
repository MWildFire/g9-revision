# Arabic definition revision

Revised script/sound guidance, all six grammar explanations, verb-person glosses, lesson/practice translations and cultural reference wording. Cards and quizzes consume the same canonical 45-word lesson data.

13 named locale blocks per language; 28 letters, 51 reference vocabulary rows, 12 phrases, 45 lesson words, 6 grammar rules; 21 review entries and 4 diagrams.

Modern Standard Arabic is the teaching variety. Latin/Cyrillic aids approximate pronunciation and are not IPA. Case endings, gender, person and regional variation are explained where they affect interpretation.

Source metadata lives in `src/definitions/arabic.ts`. Each entry records the actual source language and named section; rewritten bilingual explanations and examples are editorial paraphrases, not official Russian quotations. The interface displays references alongside the relevant teaching content.

Visuals are used for comparisons, grammatical structure and time relationships. Individual word glosses, punctuation examples and existing conjugation/alphabet tables do not receive decorative pictures.

Validation: `node --test tests/languages-definitions-revision.test.mjs`; TypeScript check; production bundle with Vite’s runner config loader. The private review manifest records all baseline text occurrences, including retained-correct and non-definition decisions, plus source access limitations. No private teaching documents or personal details are added by these notes.
