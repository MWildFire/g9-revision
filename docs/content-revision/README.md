# Content revision workflow

The goal: every definition, explanation, example, question and translation on the site is correct, written at MYP 4–5 level, sourced from IB textbooks in English and from Russian school sources in Russian, without repeated blocks.

Standards: [EN-STANDARD.md](EN-STANDARD.md) · [STYLE-RU.md](STYLE-RU.md) · [GLOSSARY.md](GLOSSARY.md) · reviewer: [REVIEW-CHECKLIST.md](REVIEW-CHECKLIST.md) · finished batches: [done/](done/)

Content is split into **batches** (`scripts/content/batches.json`), one per topic: its pages, the November lesson, the questions and the formula cards. Lanes (one Claude Code stream each): S = lead (plan pages, site shell, integration), P = physics, C = chemistry, B = biology and science skills, G = geography, M = maths, L = English, French, Arabic. `node scripts/content/next.mjs <lane>` shows the queue.

## One batch

```sh
npm run content:extract -- <batch>        # content-work/<batch>/worksheet.md + worksheet.json
npm run qa:render -- --batch <batch> --shots   # screenshots of the current pages
# write content-work/<batch>/sources.md and content-work/<batch>/NN-*.edits.jsonl
npm run content:lint -- <batch>           # must end with 0 errors
npm run content:apply -- <batch>          # writes the source files + docs/content-revision/changes/<batch>.jsonl
npm test && npm run build
npm run qa:render -- --batch <batch> --mobile --shots   # must end with 0 failed
```

### Edits file format (`content-work/<batch>/NN-anything.edits.jsonl`, one JSON object per line)

```json
{"id":"i18n:chemistry:atomsPeriodic.sections.isotopes.body","en":"New English text","ru":"Новый русский текст"}
{"id":"i18n:chemistry:atomsPeriodic.sections.trends.review.contrast","delete":true,"why":"repeated Z/A note, not about trends"}
{"id":"i18n:chemistry:simulations.atomBuilder.elements.1","keep":true,"why":"element name, correct"}
{"id":"i18n:chemistry:atomsPeriodic.sections.particles.body","create":true,"en":"…","ru":"…"}
```

- Every worksheet item needs exactly one decision: new text (`en` and/or `ru`), `keep` + `why`, or `delete` + `why`.
- `delete` and `create` work for i18n keys only. Add `"bilingual": true` to `create` for an `{en, ru}` object such as `review.contrast`.
- TypeScript items are written back by locating the old string literal. Any string that occurs more than once in the batch files (short or long) needs `"replaceAll": true` — every copy changes, and copies can sit on other pages; otherwise edit that copy by hand and re-run extract. After each `content:apply`, run `content:extract` again before applying more edits to the same files: TSX item ids are line.column and shift.
- What the tool cannot do (new sections in components, reordering, new formula cards), do by hand with the editor, then run extract + lint again.
- Text formatting the site renders: blank line = new paragraph, lines starting with `- ` = list (a list may follow a sentence with no blank line), `**bold**`. It works in the definition fields (explanation, «Distinguish», «Scope of the model»), in the rule, use, body, tip, watch-out and note fields of a card, and in practice answers. Items of an `examples` list are single lines: write them as sentences.
- `"allowDuplicate": true` (with `why`) on a `keep` or text line tells the repeat check that a long text may match another field on purpose, e.g. a section title and its term. Use it only for that case; repeated sentences inside one page are still errors.

### When an old test fails after a content change

Many old tests pin the wording of the previous text (`assert.match(... /opposite to velocity/)`). A failure means the new text dropped a point the old test protected:

1. If the point is still in the new text, perhaps in another field or worded differently, update the test path or regex to the new wording.
2. If the point is correct and required at MYP level but missing, put it back into the text.
3. If the point is wrong or beyond MYP, delete that assertion and write why in the batch notes.

Never weaken a test just to turn it green without doing one of these three.
