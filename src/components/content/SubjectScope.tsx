import { createContext, useContext, type ReactNode } from 'react';

// The subject of the page being shown. Formula cards that are found automatically
// in a text are shown only on pages of their own subject (src/content/formulaSubjects.ts),
// so a maths card no longer appears in a biology answer. A card placed explicitly
// with <FormulaTeaching id="…"/> is always shown.
export { subjectFromPath } from '../../content/formulaSubjects';
export type PageSubject = string | null;

const SubjectContext = createContext<PageSubject>(null);

export function SubjectScope({ subject, children }: { subject: PageSubject; children: ReactNode }) {
  return <SubjectContext.Provider value={subject}>{children}</SubjectContext.Provider>;
}

export const usePageSubject = () => useContext(SubjectContext);
