export type Text = { en: string; ru: string };
export type Topic = { id: string; subject: string; title: Text; route: string; source: string; optional?: boolean };
export type Block = { id: string; minutes: number; topics: string[]; task: Text; lesson?: boolean; paper?: string; optional?: boolean };
export type Day = { date: string; phase: string; title: Text; blocks: Block[]; recall: number; note?: Text; rest?: boolean };
export type Confidence = 'red' | 'amber' | 'green';
export type PlanState = { completed: Record<string, string>; confidence: Record<string, Confidence>; arabic: boolean; notes: string };
export const PLAN_KEY = 'g9-november-plan-2026-v1';
export const FIRST_EXAM = '2026-11-09';
export const READY_BY = '2026-11-04';
export const freshPlan = (): PlanState => ({ completed: {}, confidence: {}, arabic: false, notes: '' });
export function validDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(`${value}T12:00:00Z`).toISOString().slice(0, 10) === value;
}

export function normalizePlan(raw: unknown): PlanState {
  const state = freshPlan();
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return state;
  const value = raw as Record<string, unknown>;
  if (value.completed && typeof value.completed === 'object' && !Array.isArray(value.completed)) {
    for (const [id, date] of Object.entries(value.completed)) {
      if (typeof date === 'string' && validDate(date)) state.completed[id] = date;
    }
  }
  if (value.confidence && typeof value.confidence === 'object' && !Array.isArray(value.confidence)) {
    for (const [id, rating] of Object.entries(value.confidence)) {
      if (rating === 'red' || rating === 'amber' || rating === 'green') state.confidence[id] = rating;
    }
  }
  state.arabic = value.arabic === true;
  state.notes = typeof value.notes === 'string' ? value.notes.slice(0, 12000) : '';
  return state;
}

export function dubaiToday(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dubai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}
export function shiftedDate(iso: string, days: number): string {
  const date = new Date(`${iso}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  // Protected Saturday. The review joins Sunday's existing recall slot.
  if (date.getUTCDay() === 6) date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}
export function activeBlocks(day: Day, arabic: boolean): Block[] {
  return day.blocks.filter(block => arabic || !block.optional);
}
export function dayMinutes(day: Day, arabic: boolean): number {
  return activeBlocks(day, arabic).reduce((sum, block) => sum + block.minutes, day.recall);
}
export function dueReviews(days: Day[], topics: Topic[], state: PlanState, today: string) {
  const latest: Record<string, string> = {};
  for (const day of days) for (const block of activeBlocks(day, state.arabic)) {
    const completed = state.completed[block.id];
    if (completed && completed <= today) for (const id of block.topics) {
      if (!latest[id] || latest[id] < completed) latest[id] = completed;
    }
  }
  return topics.filter(topic => !topic.optional || state.arabic).flatMap(topic => {
    if (!latest[topic.id]) return [];
    const dates = [...new Set([1, 4, 11].map(offset => shiftedDate(latest[topic.id], offset)))].filter(date => date < FIRST_EXAM && !state.completed[`review:${topic.id}:${date}`]);
    return dates.length ? [{ topic, dates, due: dates.some(date => date <= today), lastStudied: latest[topic.id] }] : [];
  }).sort((a, b) => Number(b.due) - Number(a.due) || a.dates[0].localeCompare(b.dates[0]));
}
