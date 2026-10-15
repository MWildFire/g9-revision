export const STUDY_KEY = 'geography-tectonic-hazards-v1';

export type StudyState = {
  completed: string[];
  answers: Record<string, string>;
};

export function parseStudyState(raw: string | null): StudyState {
  try {
    const data: unknown = JSON.parse(raw ?? '{}');
    if (!data || typeof data !== 'object' || Array.isArray(data)) return { completed: [], answers: {} };
    const record = data as Record<string, unknown>;
    const completed = Array.isArray(record.completed)
      ? [...new Set(record.completed.filter((id): id is string => typeof id === 'string'))]
      : [];
    const answers = record.answers && typeof record.answers === 'object' && !Array.isArray(record.answers)
      ? Object.fromEntries(Object.entries(record.answers).filter((entry): entry is [string, string] => typeof entry[1] === 'string'))
      : {};
    return { completed, answers };
  } catch {
    return { completed: [], answers: {} };
  }
}

// Reuse diagrams in the compiled print guide while standalone lessons remain complete.
export function printDiagramPlan(lessons: {id: string; visual?: string}[]) {
  const owners = new Map<string, string>();
  return lessons.map(lesson => {
    const keys = !lesson.visual || (lesson.visual === 'risk' && lesson.id !== 'three-ps') ? []
      : lesson.visual !== 'volcano' ? [lesson.visual]
      : lesson.id === 'volcano-types' ? ['volcano-forms']
      : lesson.id === 'volcano-structure' ? ['volcano-anatomy']
      : ['volcano-forms', 'volcano-anatomy'];
    const showVisual = keys.some(key => !owners.has(key));
    const references = showVisual ? [] : [...new Set(keys.map(key => owners.get(key)!))];
    if (showVisual) keys.forEach(key => owners.set(key, lesson.id));
    return {showVisual, references};
  });
}
