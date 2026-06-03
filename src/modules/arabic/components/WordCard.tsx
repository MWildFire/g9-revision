import { Word } from '../data/content';
import { ArabicText } from './ArabicText';

/** The non-Arabic side of a word: meanings (EN/RU) + transliterations (lat/cyr).
 *  Reused on the Learn cards and on the back of a flashcard. */
export function WordMeaning({ word, center = false }: { word: Word; center?: boolean }) {
  const colAlign = center ? 'items-center text-center' : 'items-start text-left';
  const rowAlign = center ? 'justify-center' : 'justify-start';
  return (
    <div className={`flex flex-col gap-2 ${colAlign}`}>
      <div className={`flex flex-wrap gap-x-4 gap-y-1 ${rowAlign}`}>
        <Meaning tag="EN" value={word.en} />
        <Meaning tag="RU" value={word.ru} />
      </div>
      <div className={`flex flex-wrap gap-x-4 gap-y-1 ${rowAlign}`}>
        <Translit tag="Aa" value={word.translitEn} />
        <Translit tag="Аа" value={word.translitRu} />
      </div>
    </div>
  );
}

function Meaning({ tag, value }: { tag: string; value: string }) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted">{tag}</span>
      <span className="text-text-primary">{value}</span>
    </span>
  );
}

function Translit({ tag, value }: { tag: string; value: string }) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted">{tag}</span>
      <span className="font-mono text-xs text-text-secondary">{value}</span>
    </span>
  );
}

/** A full word card for the Learn page: Arabic script + meanings + pronunciations. */
export function WordCard({ word }: { word: Word }) {
  return (
    <div className="bg-bg-secondary border border-border rounded-md shadow-soft px-4 py-3 flex items-center gap-4">
      <ArabicText className="text-3xl md:text-4xl shrink-0 min-w-[5rem] text-right grow-0">
        {word.ar}
      </ArabicText>
      <div className="flex-1 min-w-0 border-l border-border pl-4">
        <WordMeaning word={word} />
      </div>
    </div>
  );
}
