# French definition revision

Revised the six grammar rules, contextual vocabulary glosses, conjugation guidance and writing-form descriptions. All eight existing conjugation notes now have Russian versions.

8 named locale blocks per language; 75 vocabulary rows, 12 phrase rows, 12 conjugation tables with 72 forms, 6 grammar rules; 18 review entries and 3 diagrams.

Standard French rules include exceptions and register limits. English/Russian equivalents explain the displayed sense; they are not a complete dictionary. Subjunctive mood is separated from tense and from a generic “opinion trigger”.

Source metadata lives in `src/definitions/french.ts`. Each entry records the actual source language and named section; rewritten bilingual explanations and examples are editorial paraphrases, not official Russian quotations. The interface displays references alongside the relevant teaching content.

Visuals are used for comparisons, grammatical structure and time relationships. Individual word glosses, punctuation examples and existing conjugation/alphabet tables do not receive decorative pictures.

Validation: `node --test tests/languages-definitions-revision.test.mjs`; TypeScript check; production bundle with Vite’s runner config loader. The private review manifest records all baseline text occurrences, including retained-correct and non-definition decisions, plus source access limitations. No private teaching documents or personal details are added by these notes.
