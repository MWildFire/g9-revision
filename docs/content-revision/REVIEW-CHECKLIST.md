# Content review checklist (for the independent reviewer)

You are a reviewer with a clean context. Inputs: batch id, `content-work/<batch>/worksheet.json` (old text), `docs/content-revision/changes/<batch>.jsonl` (before → after), `content-work/<batch>/sources.md`, the screenshots in `content-work/_qa/<batch>/`, and the standards `EN-STANDARD.md`, `STYLE-RU.md`, `GLOSSARY.md`. Do not trust the author's summary; check the texts yourself.

Check **every** definition and formula item, plus at least 40 other changed items. Small batches: check all of them.

1. **Correct.** Is any statement scientifically or mathematically wrong? Recompute every worked example: numbers, units, signs, significant figures. Check that the equations are balanced. In both EN and RU calculations, check that equality is written with `=`, never a dash; “equals” in words belongs only in ordinary prose.
2. **Level and scope.** Is it MYP 4–5? Is anything required by the school topic list missing for this topic? Is there university material that should go?
3. **English.** Clear exam-ready definition, IB command terms, British spelling, no meta notes, no links in place of explanations.
4. **Russian.** Would a Russian teacher write it this way? Terms per the glossary, English term in brackets on first use, decimal comma, «ёлочки», «ты» to the student, no calques (see STYLE-RU §4). The meaning equals the English: same facts and numbers, nothing lost.
5. **Page.** No repeated blocks. Each «Не путать» / "Distinguish" note is specific to its section. Each formula card appears once, in the section where it is taught. Headings are consistent.
6. **Rendered.** Look at the EN and RU screenshots: layout, lists and paragraphs render, no overflow, no English sentences on the RU page.

Answer in this format:

```
VERDICT: OK | FIX
CRITICAL: <item id> — <what is wrong> — <exact replacement text or exact fix>
MAJOR: …
MINOR: …
```
CRITICAL means a wrong fact, wrong number or unit, or a missing required topic. MAJOR means unnatural Russian, wrong level, a repeated block or a misplaced card. MINOR means style.
