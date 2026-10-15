# English text on the site: standard

Reader: an IB MYP year 5 student (Grade 10), mocks 9–13 November 2026. The student studies and writes the exam in English, so the English text is the exam language. It must match how IB MYP 4–5 textbooks define and explain things.

## 1. Sources: read first, then write

- Use the IB MYP textbook for the subject (see `SOURCES.md` in the handoff folder). Read the relevant pages **before** writing, and note the book and page in `content-work/<batch>/sources.md`.
- Paraphrase. Never copy more than a short defining phrase. Never paste textbook paragraphs.
- If the MYP book does not cover a point, use another IB textbook (MYP or DP, same publisher family) and say so in `sources.md`. Do not use OpenStax, Wikipedia or news sites as the definition source.
- The school's topic list (private workspace, `revision-plan.json` sources) sets the **scope**. Cover every bullet of the list for the topic. Do not add university material.

## 2. Level

- MYP 4–5 (age 15–16): one idea per sentence, everyday words, precise scientific terms.
- Examples of the right level: "Electrons occupy energy levels (shells) around the nucleus: 2, 8, 8." **Not** "electrons are described by quantum states". "A function gives exactly one output for each input." **Not** "an assignment from a source set to a target set".
- Use the "Extended" or "[H]" label for content the school marks as higher level. Do not mix it into the core definition.

## 3. Shape of every concept block

1. **Definition.** 1–2 sentences, exam-ready. The student could write it in an answer to "State" or "Define".
2. **Explanation.** 2–5 sentences on why or how, with the cause→effect chain written out.
3. **Example.** Numbers with units, or a concrete case: organism, reaction, place, text.
4. **Formula.** If the concept has one: every symbol with its unit, one worked substitution, and the answer with a unit. The formula card (`src/content/*FormulaTeaching.ts`) carries this. It appears **once per page**, in the section where the formula is taught.
5. **Common mistake.** The "Distinguish" / «Не путать» note, only if there is a real confusion for **this** concept. Never copy a note into several sections.

Use blank lines inside a text to split paragraphs, lines starting with `- ` for lists, and `**bold**` for the key term. The site renders these marks.

## 4. Conventions

- In calculations, use the equals sign `=` in both English and Russian. A dash in place of `=` is an error. Write “equals” in words only in ordinary prose.

- British/IB spelling: colour, behaviour, centre, metre, litre, analyse, sulfur, aluminium.
- SI units, a space between number and unit (5.0 m/s, 25 °C), decimal point, standard form 3.0 × 10⁸ m/s.
- IB command terms with their IB meaning: state, define, describe, explain, outline, calculate, compare, evaluate, discuss, justify, suggest, predict.
- Chemistry: IUPAC group numbers 1–18. You may add "group 7 (17)" where the school list uses old labels. Write state symbols in equations, balanced.
- Biology: correct organ and organism names; no anthropomorphism ("the cell wants").
- Geography: named case studies with place, date and figures, as on the school list.

## 5. Never

- Meta notes for the student: "authored adaptation", "not a quotation", "sources and wording", "depth needs a scope check", "Evidence: <file name>".
- A link instead of an explanation. The site must be complete on its own.
- Hedging that adds nothing ("in some courses…", "an approximation…") unless the distinction matters for the exam.
- Repeating the same sentence block in several sections or cards on one page.
