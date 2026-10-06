export const STUDY_KEY = 'math-term-1-2026-v1';
export type StudyState = { reviewed: string[]; answers: Record<string, string> };
export function parseStudyState(raw: string | null): StudyState {
  const empty: StudyState = { reviewed: [], answers: {} };
  if (!raw) return empty;
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== 'object' || Array.isArray(data)) return empty;
    const candidate = data as Record<string, unknown>;
    const reviewed = Array.isArray(candidate.reviewed) ? [...new Set(candidate.reviewed.filter((id): id is string => typeof id === 'string'))] : [];
    const answers = candidate.answers && typeof candidate.answers === 'object' && !Array.isArray(candidate.answers)
      ? Object.fromEntries(Object.entries(candidate.answers).filter((entry): entry is [string, string] => typeof entry[1] === 'string')) : {};
    return { reviewed, answers };
  } catch { return empty; }
}
