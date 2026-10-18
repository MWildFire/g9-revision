export type Table = { caption: string; headings: string[]; rows: (string | number)[][] };
export type Figure = 'pyramid' | 'cone' | 'sphere' | 'composite' | 'sss' | 'similarity' | 'dilation' | 'tree' | 'scatter';
export type GapBlock = {
  id: string; title: string; explanation: string; worked: string[];
  attempt: string; solution: string[]; sourceKeys: string[];
  figure?: Figure; table?: Table; attemptTable?: Table;
};
export type GapLessons = Record<string, GapBlock[]>;
