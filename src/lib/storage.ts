export const STORAGE_KEY = 'g9-revision-state';

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

export type GlobalState = {
  progress: { [subjectId: string]: { [topicId: string]: TopicProgress } };
  timetable: { entries: TimetableEntry[] };
  french: { level?: 'emergent' | 'capable' | 'proficient' };
  activeRecall: { [topicId: string]: { [blockId: string]: string } };
};

const DEFAULT_STATE: GlobalState = {
  progress: {},
  timetable: { entries: [] },
  french: {},
  activeRecall: {},
};

export function loadState(): GlobalState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveState(state: GlobalState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  return Math.round((completed / topicsCount) * 100);
}
