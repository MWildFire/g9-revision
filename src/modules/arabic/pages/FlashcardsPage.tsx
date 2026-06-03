import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layers, Check, RotateCcw, Shuffle, ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { TopicHero } from '../../../components/content/TopicHero';
import { ArabicText } from '../components/ArabicText';
import { WordMeaning } from '../components/WordCard';
import { LEARN_BLOCKS, ALL_WORDS, Word } from '../data/content';
import { readJson, writeJson } from '../data/storage';

const KNOWN_KEY = 'flashcards:known';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FlashcardsPage() {
  const { t } = useTranslation('arabic');

  const [deckId, setDeckId] = useState<string>('all');
  const [order, setOrder] = useState<Word[] | null>(null); // shuffled override
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [repeat, setRepeat] = useState<Set<string>>(new Set());
  const [known, setKnown] = useState<Set<string>>(() => new Set(readJson<string[]>(KNOWN_KEY, [])));
  const [done, setDone] = useState(false);

  const baseDeck = useMemo<Word[]>(
    () => (deckId === 'all' ? ALL_WORDS : (LEARN_BLOCKS.find((b) => b.id === deckId)?.words ?? [])),
    [deckId],
  );
  const deck = order ?? baseDeck;
  const card = deck[index];

  const reset = (newDeckId: string, newOrder: Word[] | null = null) => {
    setDeckId(newDeckId);
    setOrder(newOrder);
    setIndex(0);
    setFlipped(false);
    setRepeat(new Set());
    setDone(false);
  };

  const persistKnown = (next: Set<string>) => {
    setKnown(next);
    writeJson(KNOWN_KEY, [...next]);
  };

  const advance = () => {
    setFlipped(false);
    if (index + 1 >= deck.length) {
      setDone(true);
    } else {
      setIndex(index + 1);
    }
  };

  const markKnown = () => {
    if (card) {
      const next = new Set(known);
      next.add(card.id);
      persistKnown(next);
      const r = new Set(repeat);
      r.delete(card.id);
      setRepeat(r);
    }
    advance();
  };

  const markRepeat = () => {
    if (card) setRepeat(new Set(repeat).add(card.id));
    advance();
  };

  const reviewRepeats = () => {
    const words = deck.filter((w) => repeat.has(w.id));
    if (words.length) reset(deckId, words);
  };

  const deckTabs = [
    { id: 'all', label: t('flashcards.allWords') },
    ...LEARN_BLOCKS.map((b) => ({ id: b.id, label: b.titleEn })),
  ];

  return (
    <div>
      <TopicHero title={t('flashcards.title')} intro={t('flashcards.intro')} icon={<Layers size={28} />} />

      {/* Deck picker */}
      <div className="mt-6">
        <div className="text-xs uppercase tracking-wider text-text-muted mb-2">{t('flashcards.deck')}</div>
        <div className="flex flex-wrap gap-2">
          {deckTabs.map((d) => {
            const active = d.id === deckId && !order;
            return (
              <button
                key={d.id}
                onClick={() => reset(d.id)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                  active
                    ? 'bg-bg-secondary border-accent-olive text-text-primary shadow-soft'
                    : 'border-border text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      </div>

      {done ? (
        <DoneScreen
          known={deck.filter((w) => known.has(w.id)).length}
          total={deck.length}
          repeats={repeat.size}
          t={t}
          onRestart={() => reset(deckId)}
          onReview={reviewRepeats}
        />
      ) : card ? (
        <>
          {/* Toolbar */}
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="text-text-secondary">
              {t('flashcards.cardOf', { n: index + 1, total: deck.length })}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => reset(deckId, shuffle(baseDeck))}
                className="inline-flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
              >
                <Shuffle size={14} /> {t('flashcards.shuffle')}
              </button>
              <button
                onClick={() => reset(deckId)}
                className="inline-flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
              >
                <RotateCcw size={14} /> {t('flashcards.reset')}
              </button>
            </div>
          </div>

          {/* The flip card */}
          <div className="mt-4" style={{ perspective: '1200px' }}>
            <motion.button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              aria-label={t('flashcards.tapHint')}
              className="relative w-full block text-left"
              style={{ transformStyle: 'preserve-3d', minHeight: '15rem' }}
            >
              {/* Front — Arabic */}
              <div
                className="bg-bg-secondary border border-border rounded-lg shadow-card p-8 flex flex-col items-center justify-center gap-3"
                style={{ backfaceVisibility: 'hidden', minHeight: '15rem' }}
              >
                <span className="text-[10px] uppercase tracking-wider text-text-muted">
                  {t('flashcards.front')}
                </span>
                <ArabicText className="text-5xl md:text-6xl text-text-primary">{card.ar}</ArabicText>
                <span className="text-xs text-text-muted">{t('flashcards.tapHint')}</span>
              </div>
              {/* Back — meaning + pronunciations */}
              <div
                className="absolute inset-0 bg-bg-secondary border border-accent-olive rounded-lg shadow-card p-8 flex flex-col items-center justify-center gap-4"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <span className="text-[10px] uppercase tracking-wider text-text-muted">
                  {t('flashcards.back')}
                </span>
                <ArabicText className="text-2xl text-text-secondary">{card.ar}</ArabicText>
                <WordMeaning word={card} center />
              </div>
            </motion.button>
          </div>

          {/* Controls */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => {
                setFlipped(false);
                setIndex((i) => Math.max(0, i - 1));
              }}
              disabled={index === 0}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-border text-text-secondary hover:bg-bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft size={16} /> {t('flashcards.prev')}
            </button>
            <button
              onClick={markRepeat}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-accent-clay text-text-primary hover:bg-bg-secondary transition-colors"
              style={{ background: 'var(--color-accent-clay)22' }}
            >
              <RefreshCw size={16} /> {t('flashcards.repeat')}
            </button>
            <button
              onClick={markKnown}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-accent-sage text-text-primary hover:bg-bg-secondary transition-colors"
              style={{ background: 'var(--color-accent-sage)22' }}
            >
              <Check size={16} /> {t('flashcards.know')}
            </button>
            <button
              onClick={advance}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-accent-olive text-bg-secondary hover:opacity-90 transition-opacity"
            >
              {t('flashcards.next')} <ArrowRight size={16} />
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

function DoneScreen({
  known,
  total,
  repeats,
  t,
  onRestart,
  onReview,
}: {
  known: number;
  total: number;
  repeats: number;
  t: (k: string, o?: Record<string, unknown>) => string;
  onRestart: () => void;
  onReview: () => void;
}) {
  return (
    <div className="mt-8 bg-bg-secondary border border-border rounded-lg shadow-card p-8 text-center">
      <h2 className="font-serif text-2xl font-medium mb-2">{t('flashcards.doneTitle')}</h2>
      <p className="text-text-secondary mb-6">{t('flashcards.doneBody', { known, total })}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {repeats > 0 ? (
          <button
            onClick={onReview}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-olive text-bg-secondary hover:opacity-90 transition-opacity"
          >
            <RefreshCw size={16} /> {t('flashcards.studyRepeats', { count: repeats })}
          </button>
        ) : null}
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-text-primary hover:bg-bg-tertiary transition-colors"
        >
          <RotateCcw size={16} /> {t('flashcards.restart')}
        </button>
      </div>
    </div>
  );
}
