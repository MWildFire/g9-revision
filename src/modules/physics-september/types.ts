export type Bilingual = { en: string; ru: string };
export const b = (en: string, ru: string): Bilingual => ({ en, ru });
export type Section = { title: Bilingual; text: Bilingual };
export const s = (
  en: string,
  ru: string,
  textEn: string,
  textRu: string,
): Section => ({ title: b(en, ru), text: b(textEn, textRu) });
export type Worked = { question: Bilingual; steps: Bilingual[] };
export const w = (en: string, ru: string, ...steps: Bilingual[]): Worked => ({
  question: b(en, ru),
  steps,
});
export type Visual =
  | "atom"
  | "scattering"
  | "penetration"
  | "equation"
  | "decay"
  | "contamination"
  | "chain"
  | "fusion";
export type Lesson = {
  id: string;
  title: Bilingual;
  photoTopic: string;
  intro: Bilingual;
  sections: Section[];
  formulas: string[];
  examples: Worked[];
  pitfalls: Bilingual[];
  visual?: Visual;
};
export type Strand = "A(i)" | "A(ii)" | "A(iii)";
export type Question = {
  id: string;
  topic: string;
  strand: Strand;
  difficulty: "foundation" | "application" | "challenge";
  prompt: Bilingual;
  hint: Bilingual;
  marking: Bilingual[];
};
export const q = (
  id: string,
  topic: string,
  strand: Strand,
  difficulty: Question["difficulty"],
  prompt: Bilingual,
  hint: Bilingual,
  ...marking: Bilingual[]
): Question => ({ id, topic, strand, difficulty, prompt, hint, marking });
