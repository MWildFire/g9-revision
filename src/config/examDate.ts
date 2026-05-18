export const DEFAULT_EXAM_DATE = '2026-06-15';
export const EXAM_DATE_STORAGE_KEY = 'g9-exam-date';

export function getExamDate(): Date {
  const stored = typeof window !== 'undefined'
    ? window.localStorage.getItem(EXAM_DATE_STORAGE_KEY)
    : null;
  return new Date(stored ?? DEFAULT_EXAM_DATE);
}

export function setExamDate(iso: string): void {
  window.localStorage.setItem(EXAM_DATE_STORAGE_KEY, iso);
}
