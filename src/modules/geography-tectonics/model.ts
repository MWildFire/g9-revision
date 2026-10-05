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
