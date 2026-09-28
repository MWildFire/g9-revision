// October is confirmed by the user; a specific school exam date is not.
export const EXAM_DATE_STORAGE_KEY = 'myp-mocks-2026-exam-date';
export const EXAM_DATE_EVENT = 'g9-exam-date-update';

export function parseExamDate(iso: string | null): Date | null {
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const [year, month, day] = iso.split('-').map(Number);
  if (year < 2026 || year > 2100) return null;
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}
export function getExamDate(): Date | null {
  try { return typeof window === 'undefined' ? null : parseExamDate(window.localStorage.getItem(EXAM_DATE_STORAGE_KEY)); }
  catch { return null; }
}
export function setExamDate(iso: string): void {
  if (iso && !parseExamDate(iso)) return;
  try {
    if (iso) window.localStorage.setItem(EXAM_DATE_STORAGE_KEY, iso);
    else window.localStorage.removeItem(EXAM_DATE_STORAGE_KEY);
  } catch { return; }
  window.dispatchEvent(new CustomEvent(EXAM_DATE_EVENT));
}
