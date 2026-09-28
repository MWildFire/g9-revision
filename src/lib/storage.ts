export const STORAGE_KEY = 'g9-revision-state';
export const UPDATE_EVENT = 'g9-revision-state-update';

import type { SubjectId } from '../config/subjects';

export type TopicProgress = {
  viewed: boolean;
  completed: boolean;
  lastVisited?: string; // ISO
};

export type TimetableEntry = {
  id: string;
  date: string; // ISO yyyy-MM-dd
  subjectId: SubjectId;
  topicId: string;
  completed: boolean;
  notes?: string;
};

export const STORAGE_SCHEMA_VERSION = 1;

export type GlobalState = {
  version: number;
  progress: { [subjectId: string]: { [topicId: string]: TopicProgress } };
  timetable: { entries: TimetableEntry[] };
  french: { level?: 'emergent' | 'capable' | 'proficient' };
  activeRecall: { [topicId: string]: { [blockId: string]: string } };
};

const freshState = (): GlobalState => ({
  version: STORAGE_SCHEMA_VERSION,
  progress: {},
  timetable: { entries: [] },
  french: {},
  activeRecall: {},
});

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export function loadState(): GlobalState {
  if (typeof window === 'undefined') return freshState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshState();
    const parsed = JSON.parse(raw);
    if (!isPlainObject(parsed)) return freshState();
    const state = freshState();
    if (isPlainObject(parsed.progress)) {
      for (const [subject, topics] of Object.entries(parsed.progress)) {
        if (!isPlainObject(topics)) continue;
        state.progress[subject] = {};
        for (const [id, value] of Object.entries(topics)) {
          if (!isPlainObject(value)) continue;
          state.progress[subject][id] = { viewed: value.viewed === true, completed: value.completed === true,
            ...(typeof value.lastVisited === 'string' ? { lastVisited: value.lastVisited } : {}) };
        }
      }
    }
    if (isPlainObject(parsed.timetable) && Array.isArray(parsed.timetable.entries)) {
      const subjects = ['math', 'physics', 'chemistry', 'biology', 'english', 'french', 'arabic', 'geography'];
      state.timetable.entries = parsed.timetable.entries.filter((e): e is TimetableEntry =>
        isPlainObject(e) && typeof e.id === 'string' && typeof e.date === 'string' &&
        /^\d{4}-\d{2}-\d{2}$/.test(e.date) && typeof e.subjectId === 'string' && subjects.includes(e.subjectId) &&
        typeof e.topicId === 'string' && typeof e.completed === 'boolean');
    }
    if (isPlainObject(parsed.french) && ['emergent', 'capable', 'proficient'].includes(String(parsed.french.level))) {
      state.french.level = parsed.french.level as GlobalState['french']['level'];
    }
    if (isPlainObject(parsed.activeRecall)) {
      for (const [topic, blocks] of Object.entries(parsed.activeRecall)) {
        if (isPlainObject(blocks)) state.activeRecall[topic] = Object.fromEntries(Object.entries(blocks).filter(([,v]) => typeof v === 'string')) as Record<string, string>;
      }
    }
    return state;
  } catch {
    return freshState();
  }
}

export function saveState(state: GlobalState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event(UPDATE_EVENT));
  } catch {
    /* quota */
  }
}

export function markTopicViewed(subjectId: SubjectId, topicId: string): void {
  const state = loadState();
  if (!state.progress[subjectId]) state.progress[subjectId] = {};
  state.progress[subjectId][topicId] = {
    ...state.progress[subjectId][topicId],
    viewed: true,
    lastVisited: new Date().toISOString(),
  };
  saveState(state);
}

export function markTopicCompleted(subjectId: SubjectId, topicId: string, completed: boolean): void {
  const state = loadState();
  if (!state.progress[subjectId]) state.progress[subjectId] = {};
  state.progress[subjectId][topicId] = {
    ...state.progress[subjectId][topicId],
    viewed: true,
    completed,
    lastVisited: new Date().toISOString(),
  };
  saveState(state);
}

export function getSubjectProgress(subjectId: SubjectId, topicsCount: number): number {
  const state = loadState();
  const topics = state.progress[subjectId];
  if (!topics || topicsCount === 0) return 0;
  const completed = Object.values(topics).filter((t) => t.completed).length;
  return Math.min(100, Math.round((completed / topicsCount) * 100));
}
