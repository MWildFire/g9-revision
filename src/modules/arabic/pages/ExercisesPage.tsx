import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PencilLine, Check, X, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { TopicHero } from '../../../components/content/TopicHero';
import { ArabicText } from '../components/ArabicText';
import {
  REARRANGE,
  RearrangeItem,
  MATCH_PAIRS,
  SENTENCE_KEYWORDS,
  CLOZE,
  TRANSLATE,
} from '../data/content';
import { readJson, writeJson } from '../data/storage';

type TFn = (k: string, o?: Record<string, unknown>) => string;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Section({
  title,
  instruction,
  children,
}: {
  title: string;
  instruction: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 bg-bg-secondary border border-border rounded-lg shadow-card overflow-hidden">
      <header
        className="px-6 py-4 border-b border-border bg-bg-primary/40"
        style={{ borderLeftColor: 'var(--color-accent-olive)', borderLeftWidth: '4px' }}
      >
        <h2 className="font-serif text-xl font-medium text-text-primary">{title}</h2>
        <p className="mt-1 text-sm text-text-secondary">{instruction}</p>
      </header>
      <div className="p-6">{children}</div>
    </section>
  );
}

export function ExercisesPage() {
  const { t } = useTranslation('arabic');
  return (
    <div>
      <TopicHero title={t('exercises.title')} intro={t('exercises.intro')} icon={<PencilLine size={28} />} />

      <Section title={t('exercises.rearrange.title')} instruction={t('exercises.rearrange.instruction')}>
        <div className="space-y-6">
          {REARRANGE.map((item) => (
            <RearrangeView key={item.id} item={item} t={t} />
          ))}
        </div>
      </Section>

      <Section title={t('exercises.match.title')} instruction={t('exercises.match.instruction')}>
        <MatchView t={t} />
      </Section>

      <Section title={t('exercises.create.title')} instruction={t('exercises.create.instruction')}>
        <CreateView t={t} />
      </Section>

      <Section title={t('exercises.cloze.title')} instruction={t('exercises.cloze.instruction')}>
        <ClozeView t={t} />
      </Section>

      <Section title={t('exercises.translate.title')} instruction={t('exercises.translate.instruction')}>
        <div className="space-y-4">
          {TRANSLATE.map((item, i) => (
            <TranslateView key={i} item={item} t={t} />
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ── A · Re-arrange ───────────────────────────────────────────── */
function RearrangeView({ item, t }: { item: RearrangeItem; t: TFn }) {
  const bank = useMemo(() => shuffle(item.shuffled.map((w, i) => ({ w, i }))), [item]);
  const [built, setBuilt] = useState<{ w: string; i: number }[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const usedKeys = new Set(built.map((b) => b.i));
  const reset = () => {
    setBuilt([]);
    setChecked(null);
    setShowAnswer(false);
  };
  const check = () => setChecked(built.map((b) => b.w).join(' ') === item.answer);

  return (
    <div className="border border-border rounded-md p-4">
      {/* Build area (RTL) */}
      <div
        dir="rtl"
        lang="ar"
        className="min-h-[3.5rem] flex flex-wrap items-center gap-2 bg-bg-primary/40 border border-dashed border-border rounded-md p-3 mb-3"
      >
        {built.length === 0 ? (
          <span dir="ltr" className="text-sm text-text-muted">
            {t('exercises.rearrange.build')}
          </span>
        ) : (
          built.map((b, idx) => (
            <button
              key={b.i}
              onClick={() => {
                setBuilt(built.filter((_, j) => j !== idx));
                setChecked(null);
              }}
              className="arabic text-lg px-3 py-1.5 rounded-md bg-bg-secondary border border-accent-olive hover:opacity-80 transition-opacity"
            >
              {b.w}
            </button>
          ))
        )}
      </div>

      {/* Word bank (RTL) */}
      <div dir="rtl" className="flex flex-wrap gap-2 mb-3">
        {bank.map((b) => (
          <button
            key={b.i}
            disabled={usedKeys.has(b.i)}
            onClick={() => {
              setBuilt([...built, b]);
              setChecked(null);
            }}
            className="arabic text-lg px-3 py-1.5 rounded-md bg-bg-secondary border border-border hover:border-accent-olive disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            {b.w}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={check}
          disabled={built.length !== item.shuffled.length}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent-olive text-bg-secondary text-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
        >
          <Check size={15} /> {t('exercises.check')}
        </button>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-text-secondary text-sm hover:bg-bg-tertiary transition-colors"
        >
          <RotateCcw size={15} /> {t('exercises.rearrange.clear')}
        </button>
        <button
          onClick={() => setShowAnswer((s) => !s)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-transparent text-text-secondary text-sm hover:bg-bg-tertiary transition-colors"
        >
          {showAnswer ? <EyeOff size={15} /> : <Eye size={15} />}
          {showAnswer ? t('exercises.hideAnswer') : t('exercises.showAnswer')}
        </button>
        {checked !== null ? <Feedback ok={checked} t={t} /> : null}
      </div>

      {showAnswer ? (
        <div className="mt-3 pt-3 border-t border-border">
          <ArabicText block className="text-xl text-accent-olive">
            {item.answer}
          </ArabicText>
          <p className="text-sm text-text-secondary mt-1">{item.en}</p>
          <p className="text-sm text-text-secondary">{item.ru}</p>
        </div>
      ) : null}
    </div>
  );
}

/* ── B · Match the meaning ────────────────────────────────────── */
function MatchView({ t }: { t: TFn }) {
  const options = useMemo(() => shuffle(MATCH_PAIRS.map((p) => p.ar)), []);
  const [picks, setPicks] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const correctCount = MATCH_PAIRS.filter((p) => picks[p.en] === p.ar).length;

  return (
    <div>
      <div className="space-y-2">
        {MATCH_PAIRS.map((p) => {
          const ok = picks[p.en] === p.ar;
          return (
            <div
              key={p.en}
              className="flex items-center gap-3 bg-bg-primary/30 border border-border rounded-md px-3 py-2"
            >
              <span className="flex-1 text-sm">{p.en}</span>
              <select
                value={picks[p.en] ?? ''}
                onChange={(e) => {
                  setPicks({ ...picks, [p.en]: e.target.value });
                  setChecked(false);
                }}
                dir="rtl"
                lang="ar"
                className="arabic text-lg bg-bg-secondary border border-border rounded-md px-2 py-1.5 focus:border-accent-olive outline-none"
              >
                <option value="" dir="ltr">
                  {t('exercises.match.pick')}
                </option>
                {options.map((ar) => (
                  <option key={ar} value={ar}>
                    {ar}
                  </option>
                ))}
              </select>
              {checked ? (
                ok ? (
                  <Check size={16} className="text-accent-sage shrink-0" />
                ) : (
                  <X size={16} className="text-accent-clay shrink-0" />
                )
              ) : (
                <span className="w-4 shrink-0" />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => setChecked(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent-olive text-bg-secondary text-sm hover:opacity-90 transition-opacity"
        >
          <Check size={15} /> {t('exercises.check')}
        </button>
        <button
          onClick={() => {
            setPicks({});
            setChecked(false);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-text-secondary text-sm hover:bg-bg-tertiary transition-colors"
        >
          <RotateCcw size={15} /> {t('exercises.reset')}
        </button>
        {checked ? (
          <span className="text-sm font-medium text-text-primary">
            {t('exercises.match.result', { correct: correctCount, total: MATCH_PAIRS.length })}
          </span>
        ) : null}
      </div>
    </div>
  );
}

/* ── C · Create sentences (open writing, autosaved) ───────────── */
const CREATE_KEY = 'exercise:create';
function CreateView({ t }: { t: TFn }) {
  const [text, setText] = useState<string>(() => readJson<string>(CREATE_KEY, ''));
  const save = (v: string) => {
    setText(v);
    writeJson(CREATE_KEY, v);
  };
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-text-muted mb-2">
        {t('exercises.create.bank')}
      </div>
      <div dir="rtl" className="flex flex-wrap gap-2 mb-3">
        {SENTENCE_KEYWORDS.map((w, i) => (
          <button
            key={`${w}-${i}`}
            onClick={() => save((text ? text + ' ' : '') + w)}
            title={t('exercises.create.copyHint')}
            className="arabic text-base px-3 py-1.5 rounded-md bg-bg-primary/40 border border-border hover:border-accent-olive transition-colors"
          >
            {w}
          </button>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => save(e.target.value)}
        dir="rtl"
        lang="ar"
        rows={4}
        placeholder={t('exercises.create.placeholder')}
        className="arabic w-full text-lg bg-bg-primary/30 border border-border rounded-md p-3 focus:border-accent-olive outline-none resize-y"
      />
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-text-muted">{t('exercises.saved')}</span>
        <button
          onClick={() => save('')}
          className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          <RotateCcw size={13} /> {t('exercises.reset')}
        </button>
      </div>
    </div>
  );
}

/* ── D · Read and complete (cloze, open, autosaved) ───────────── */
const CLOZE_KEY = 'exercise:cloze';
function ClozeView({ t }: { t: TFn }) {
  const parts = CLOZE.templateAr.split('____');
  const [answers, setAnswers] = useState<string[]>(() => {
    const saved = readJson<string[]>(CLOZE_KEY, []);
    return CLOZE.blanks.map((_, i) => saved[i] ?? '');
  });
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const setAt = (i: number, v: string) => {
    const next = answers.map((a, j) => (j === i ? v : a));
    setAnswers(next);
    writeJson(CLOZE_KEY, next);
  };

  return (
    <div>
      {/* Template for context */}
      <ArabicText block className="text-xl bg-bg-primary/30 border border-border rounded-md p-4 mb-4">
        {parts.map((p, i) => (i < CLOZE.blanks.length ? `${p}（${i + 1}）` : p)).join('')}
      </ArabicText>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CLOZE.blanks.map((blank, i) => (
          <label key={i} className="block">
            <span className="text-xs text-text-secondary">
              <span
                className="inline-flex w-5 h-5 mr-1.5 rounded-full bg-bg-tertiary items-center justify-center text-[10px] align-middle"
              >
                {i + 1}
              </span>
              {lang === 'ru' ? blank.hintRu : blank.hintEn}
            </span>
            <input
              value={answers[i]}
              onChange={(e) => setAt(i, e.target.value)}
              dir="rtl"
              lang="ar"
              className="arabic mt-1 w-full text-lg bg-bg-secondary border border-border rounded-md px-3 py-2 focus:border-accent-olive outline-none"
            />
          </label>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-text-muted">{t('exercises.saved')}</span>
        <button
          onClick={() => {
            const cleared = CLOZE.blanks.map(() => '');
            setAnswers(cleared);
            writeJson(CLOZE_KEY, cleared);
          }}
          className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          <RotateCcw size={13} /> {t('exercises.reset')}
        </button>
      </div>
    </div>
  );
}

/* ── E · Translate (read & reveal) ────────────────────────────── */
function TranslateView({ item, t }: { item: { ar: string; en: string; ru: string }; t: TFn }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="border border-border rounded-md p-4">
      <ArabicText block className="text-2xl text-text-primary mb-3">
        {item.ar}
      </ArabicText>
      <button
        onClick={() => setShown((s) => !s)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-text-secondary text-sm hover:bg-bg-tertiary transition-colors"
      >
        {shown ? <EyeOff size={15} /> : <Eye size={15} />}
        {shown ? t('exercises.translate.hide') : t('exercises.translate.reveal')}
      </button>
      {shown ? (
        <div className="mt-3 pt-3 border-t border-border space-y-1">
          <p className="text-text-primary">{item.en}</p>
          <p className="text-text-secondary">{item.ru}</p>
        </div>
      ) : null}
    </div>
  );
}

function Feedback({ ok, t }: { ok: boolean; t: TFn }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary">
      {ok ? <Check size={15} className="text-accent-sage" /> : <X size={15} className="text-accent-clay" />}
      {ok ? t('exercises.correct') : t('exercises.incorrect')}
    </span>
  );
}
