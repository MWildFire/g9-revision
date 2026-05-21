export const DEFAULT_EXAM_DATE = '2026-06-15';
export const EXAM_DATE_STORAGE_KEY = 'g9-exam-date';
export const EXAM_DATE_EVENT = 'g9-exam-date-update';

export function getExamDate(): Date {
  const stored = typeof window !== 'undefined'
    ? window.localStorage.getItem(EXAM_DATE_STORAGE_KEY)
    : null;
  const parsed = new Date(stored ?? DEFAULT_EXAM_DATE);
  return Number.isNaN(parsed.getTime()) ? new Date(DEFAULT_EXAM_DATE) : parsed;
}

export function setExamDate(iso: string): void {
  window.localStorage.setItem(EXAM_DATE_STORAGE_KEY, iso);
  window.dispatchEvent(new CustomEvent(EXAM_DATE_EVENT));
}
