import { ALL_WORDS, getBlock, Word } from './content';

export type QType = 'ar2mean' | 'mean2ar' | 'translit2ar';
export type Lang = 'en' | 'ru';

export type Question = {
  word: Word;
  type: QType;
  /** Which Word field the answer options come from. */
  field: 'en' | 'ru' | 'ar';
  /** Value interpolated into the prompt (meaning or transliteration); '' for ar2mean. */
  promptValue: string;
  options: string[];
  correct: string;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const TYPES: QType[] = ['ar2mean', 'mean2ar', 'translit2ar'];

/** Pick `n` distinct option values from the ordered candidate words, never equal
 *  to `correct` and never duplicated (compared on the displayed field value). */
function pickDistractors(correct: string, ordered: Word[], field: 'en' | 'ru' | 'ar', n: number): string[] {
  const seen = new Set([correct]);
  const out: string[] = [];
  for (const w of ordered) {
    const v = w[field];
    if (!seen.has(v)) {
      seen.add(v);
      out.push(v);
    }
    if (out.length === n) break;
  }
  return out;
}

/** Build the candidate ordering so distractors honour the cross-block rule.
 *  In a block quiz, 1–2 distractors are pulled from OTHER blocks first, the rest
 *  preferentially from the same block; a shuffled full pool is appended as a
 *  fallback so we can always fill four distinct options. */
function distractorOrdering(target: Word, blockId: string | null): Word[] {
  const fallback = shuffle(ALL_WORDS.filter((w) => w.id !== target.id));
  if (!blockId) return fallback;

  const block = getBlock(blockId);
  if (!block) return fallback;

  const ids = new Set(block.words.map((w) => w.id));
  const others = shuffle(ALL_WORDS.filter((w) => !ids.has(w.id)));
  const sames = shuffle(block.words.filter((w) => w.id !== target.id));
  const nOther = Math.min(others.length, 1 + Math.floor(Math.random() * 2)); // 1 or 2
  return [...others.slice(0, nOther), ...sames, ...others.slice(nOther), ...fallback];
}

export function buildQuestion(target: Word, blockId: string | null, lang: Lang): Question {
  const type = TYPES[Math.floor(Math.random() * TYPES.length)];

  let field: 'en' | 'ru' | 'ar';
  let promptValue = '';
  let correct: string;

  if (type === 'ar2mean') {
    field = lang; // options are meanings in the UI language
    correct = target[lang];
  } else if (type === 'mean2ar') {
    field = 'ar';
    promptValue = target[lang];
    correct = target.ar;
  } else {
    field = 'ar';
    promptValue = lang === 'ru' ? target.translitRu : target.translitEn;
    correct = target.ar;
  }

  const ordered = distractorOrdering(target, blockId);
  const distractors = pickDistractors(correct, ordered, field, 3);
  const options = shuffle([correct, ...distractors]);

  return { word: target, type, field, promptValue, options, correct };
}

/** Generate `count` questions from a pool. Targets cycle through reshuffled
 *  copies of the pool, so words only repeat once the pool is exhausted. */
export function generateQuiz(pool: Word[], blockId: string | null, count: number, lang: Lang): Question[] {
  if (pool.length === 0) return [];
  const targets: Word[] = [];
  let bag: Word[] = [];
  for (let i = 0; i < count; i++) {
    if (bag.length === 0) bag = shuffle(pool);
    targets.push(bag.pop() as Word);
  }
  return targets.map((w) => buildQuestion(w, blockId, lang));
}
