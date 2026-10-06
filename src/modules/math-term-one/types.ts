export type Tier = 'start' | 'core' | 'recap' | 'extended';
export type Term = { term: string; meaning: string; example: string };
export type Question = { prompt: string; hint: string; steps: string[] };
export type Lesson = {
  id: string; title: string; tier: Tier; intro: string;
  goals: string[]; terms: Term[];
  sections: { title: string; text: string; formula?: string }[];
  example: { prompt: string; steps: string[] };
  pitfalls: string[]; questions: Question[]; drFrost?: string;
  visual?: 'coordinate' | 'inequality' | 'venn';
};
