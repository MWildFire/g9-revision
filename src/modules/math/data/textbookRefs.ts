import type { MathTopicId } from './drFrostTasks';

export interface TextbookRef {
  topicId: MathTopicId;
  standard: { chapter: string; description: string };
  extended?: { chapter: string; description: string };
}

export const TEXTBOOK_REFS: TextbookRef[] = [
  {
    topicId: 'number-systems',
    standard: { chapter: 'Ch 1', description: 'Mixed practice / problem solving' },
    extended: { chapter: 'Ch 1', description: 'Mixed practice / problem solving' },
  },
  {
    topicId: 'functions-algebra',
    standard: { chapter: 'Ch 2 & 3', description: 'Mixed practice / problem solving' },
    extended: { chapter: 'Ch 3', description: 'Mixed practice / problem solving' },
  },
  {
    topicId: 'sequences',
    standard: { chapter: 'Ch 8', description: 'Mixed practice / problem solving' },
    extended: { chapter: 'Ch 8.1 only', description: 'Sum to infinity' },
  },
  {
    topicId: 'geometry-trig',
    standard: { chapter: 'Ch 7', description: 'Mixed practice / problem solving' },
    extended: { chapter: 'Ch 7', description: 'Mixed practice / problem solving' },
  },
  {
    topicId: 'stats-prob',
    standard: { chapter: 'Ch 6 & 9', description: 'Mixed practice / problem solving' },
    extended: { chapter: 'Ch 6', description: 'Mixed practice / problem solving' },
  },
];

export function getTextbookRef(topicId: MathTopicId): TextbookRef | undefined {
  return TEXTBOOK_REFS.find((r) => r.topicId === topicId);
}
