import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListChecks, Check, X, RotateCcw, ArrowRight, Trophy } from 'lucide-react';
import { TopicHero } from '../../../components/content/TopicHero';
import { ArabicText } from '../components/ArabicText';
import { ALL_WORDS, VOCAB_BLOCKS, getBlock, Word } from '../data/content';
import { generateQuiz, Question, Lang } from '../data/quiz';
import { readJson, writeJson } from '../data/storage';

const BEST_KEY = 'quiz:best';
const LENGTHS = [10, 20] as const;

type Phase = 'setup' | 'playing' | 'results';
type Mistake = { question: Question };

export function QuizPage() {
  const { t, i18n } = useTranslation('arabic');
  const lang: Lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const [phase, setPhase] = useState<Phase>('setup');
  const [scopeId, setScopeId] = useState<string>('all');
  const [length, setLength] = useState<number | 'all'>(10);
  const [customPool, setCustomPool] = useState<Word[] | null>(null);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [newBest, setNewBest] = useState(false);

  const bestScores = readJson<Record<string, number>>(BEST_KEY, {});

  const start = (opts?: { pool?: Word[]; useScope?: string; isCustom?: boolean }) => {
    const isCustom = opts?.isCustom ?? false;
    const sid = opts?.useScope ?? scopeId;
    const pool = opts?.pool ?? (isCustom ? customPool ?? [] : sid === 'all' ? ALL_WORDS : getBlock(sid)?.words ?? []);
    if (pool.length === 0) return;
    const blockId = isCustom || sid === 'all' ? null : sid;
    const count = length === 'all' ? pool.length : length;
    setQuestions(generateQuiz(pool, blockId, count, lang));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setMistakes([]);
    setNewBest(false);
    setPhase('playing');
  };

  const q = questions[index];

  const answer = (opt: string) => {
    if (selected !== null || !q) return;
    setSelected(opt);
    if (opt === q.correct) {
      setScore((s) => s + 1);
    } else {
      setMistakes((m) => [...m, { question: q }]);
    }
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      finish();
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const finish = () => {
    // Record best (percentage) only for real block / all-words runs, not mistake practice.
    if (!customPool && questions.length > 0) {
      const pct = Math.round((score / questions.length) * 100);
      const prev = bestScores[scopeId] ?? 0;
      if (pct > prev) {
        writeJson(BEST_KEY, { ...bestScores, [scopeId]: pct });
        setNewBest(true);
      }
    }
    setPhase('results');
  };

  // ── Setup ──────────────────────────────────────────────
  if (phase === 'setup') {
    const scopes = [
      { id: 'all', title: t('quiz.allWords'), desc: t('quiz.allWordsDesc'), count: ALL_WORDS.length },
      ...VOCAB_BLOCKS.map((b) => ({
        id: b.id,
        title: lang === 'ru' ? b.titleRu : b.titleEn,
        desc: t('quiz.blockWords', { count: b.words.length }),
        count: b.words.length,
      })),
    ];
    return (
      <div>
        <TopicHero title={t('quiz.title')} intro={t('quiz.intro')} icon={<ListChecks size={28} />} />

        <h2 className="font-serif text-xl font-medium mt-8 mb-3">{t('quiz.chooseHeading')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {scopes.map((s) => {
            const active = scopeId === s.id && !customPool;
            const best = bestScores[s.id];
            return (
              <button
                key={s.id}
                onClick={() => {
                  setScopeId(s.id);
                  setCustomPool(null);
                }}
                className={`text-left bg-bg-secondary border rounded-lg p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft ${
                  active ? 'border-accent-olive shadow-soft' : 'border-border'
                }`}
                style={active ? { borderTopColor: 'var(--color-accent-olive)', borderTopWidth: '3px' } : undefined}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base font-medium">{s.title}</h3>
                  {active ? <Check size={16} className="text-accent-olive" /> : null}
                </div>
                <p className="text-xs text-text-secondary mt-0.5">{s.desc}</p>
                {best != null ? (
                  <p className="text-xs text-text-muted mt-2 inline-flex items-center gap-1">
                    <Trophy size={12} /> {t('quiz.best', { pct: best })}
                  </p>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-sm text-text-secondary">{t('quiz.lengthLabel')}:</span>
          <div className="inline-flex p-1 bg-bg-tertiary rounded-md border border-border">
            {[...LENGTHS, 'all' as const].map((l) => {
              const active = length === l;
              return (
                <button
                  key={String(l)}
                  onClick={() => setLength(l)}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                    active ? 'bg-bg-secondary text-text-primary shadow-soft' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {l === 'all' ? t('quiz.lengthAll') : l}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => start()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-olive text-bg-secondary font-medium hover:opacity-90 transition-opacity"
          >
            {t('quiz.start')} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // ── Playing ────────────────────────────────────────────
  if (phase === 'playing' && q) {
    const isArabicOptions = q.field === 'ar';
    const promptText =
      q.type === 'ar2mean'
        ? t('quiz.promptMeaning')
        : q.type === 'mean2ar'
        ? t('quiz.promptArabic', { value: q.promptValue })
        : t('quiz.promptTranslit', { value: q.promptValue });

    return (
      <div>
        <TopicHero title={t('quiz.title')} intro={t('quiz.intro')} icon={<ListChecks size={28} />} />

        <div className="mt-6 flex items-center justify-between text-sm text-text-secondary">
          <span>{t('quiz.questionOf', { n: index + 1, total: questions.length })}</span>
          <span>
            {t('quiz.scoreLabel')}: <span className="font-mono text-text-primary">{score}</span>
          </span>
        </div>
        <div className="mt-2 h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-olive rounded-full transition-all duration-300"
            style={{ width: `${(index / questions.length) * 100}%` }}
          />
        </div>

        <div className="mt-6 bg-bg-secondary border border-border rounded-lg shadow-card p-6">
          <p className="text-sm text-text-secondary mb-3">{promptText}</p>
          {q.type === 'ar2mean' ? (
            <ArabicText block className="text-5xl text-text-primary text-center py-4">
              {q.word.ar}
            </ArabicText>
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {q.options.map((opt) => {
              let cls = 'border-border hover:border-accent-olive';
              if (selected !== null) {
                if (opt === q.correct) cls = 'border-accent-sage bg-accent-sage/10';
                else if (opt === selected) cls = 'border-accent-clay bg-accent-clay/10';
                else cls = 'border-border opacity-60';
              }
              return (
                <button
                  key={opt}
                  onClick={() => answer(opt)}
                  disabled={selected !== null}
                  className={`flex items-center justify-between gap-2 text-left bg-bg-primary/30 border rounded-md px-4 py-3 transition-colors disabled:cursor-default ${cls}`}
                >
                  {isArabicOptions ? (
                    <ArabicText className="text-2xl">{opt}</ArabicText>
                  ) : (
                    <span className="text-text-primary">{opt}</span>
                  )}
                  {selected !== null && opt === q.correct ? (
                    <Check size={18} className="text-accent-sage shrink-0" />
                  ) : selected === opt ? (
                    <X size={18} className="text-accent-clay shrink-0" />
                  ) : null}
                </button>
              );
            })}
          </div>

          {selected !== null ? (
            <div className="mt-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary">
                {selected === q.correct ? (
                  <Check size={16} className="text-accent-sage" />
                ) : (
                  <X size={16} className="text-accent-clay" />
                )}
                {selected === q.correct ? t('quiz.correct') : t('quiz.incorrect')}
              </span>
              <button
                onClick={next}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-accent-olive text-bg-secondary font-medium hover:opacity-90 transition-opacity"
              >
                {index + 1 >= questions.length ? t('quiz.finish') : t('quiz.next')}
                <ArrowRight size={16} />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // ── Results ────────────────────────────────────────────
  const total = questions.length;
  const pct = total ? Math.round((score / total) * 100) : 0;
  const missedWords: Word[] = [];
  const seen = new Set<string>();
  for (const m of mistakes) {
    if (!seen.has(m.question.word.id)) {
      seen.add(m.question.word.id);
      missedWords.push(m.question.word);
    }
  }

  return (
    <div>
      <TopicHero title={t('quiz.title')} intro={t('quiz.intro')} icon={<ListChecks size={28} />} />

      <div className="mt-8 bg-bg-secondary border border-border rounded-lg shadow-card p-8 text-center">
        <h2 className="font-serif text-2xl font-medium mb-2">{t('quiz.resultsTitle')}</h2>
        <p className="text-3xl font-serif text-accent-olive mb-1">{t('quiz.resultsScore', { score, total })}</p>
        <p className="text-sm text-text-muted">{pct}%</p>
        {newBest ? (
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-olive">
            <Trophy size={15} /> {t('quiz.newBest')}
          </p>
        ) : null}
      </div>

      <h3 className="font-serif text-xl font-medium mt-8 mb-3">{t('quiz.mistakesHeading')}</h3>
      {missedWords.length === 0 ? (
        <p className="text-text-secondary">{t('quiz.noMistakes')}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {missedWords.map((w) => (
            <div key={w.id} className="flex items-center gap-3 bg-bg-secondary border border-border rounded-md px-4 py-2.5">
              <ArabicText className="text-2xl text-accent-clay shrink-0">{w.ar}</ArabicText>
              <div className="text-sm">
                <div className="text-text-primary">{lang === 'ru' ? w.ru : w.en}</div>
                <div className="font-mono text-xs text-text-secondary">
                  {lang === 'ru' ? w.translitRu : w.translitEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => start()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-olive text-bg-secondary font-medium hover:opacity-90 transition-opacity"
        >
          <RotateCcw size={16} /> {t('quiz.retry')}
        </button>
        {missedWords.length > 0 ? (
          <button
            onClick={() => {
              setCustomPool(missedWords);
              start({ pool: missedWords, isCustom: true });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-accent-olive text-text-primary hover:bg-bg-secondary transition-colors"
          >
            {t('quiz.learnMistakes', { count: missedWords.length })}
          </button>
        ) : null}
        <button
          onClick={() => {
            setCustomPool(null);
            setPhase('setup');
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-text-secondary hover:bg-bg-tertiary transition-colors"
        >
          {t('quiz.back')}
        </button>
      </div>
    </div>
  );
}
