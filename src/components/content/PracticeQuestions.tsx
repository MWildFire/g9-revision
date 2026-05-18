import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';

export type CommandTerm =
  | 'state'
  | 'describe'
  | 'explain'
  | 'compare'
  | 'evaluate'
  | 'calculate';

export type Criterion = 'A' | 'B' | 'C' | 'D';

export interface PracticeQuestion {
  id: string;
  commandTerm: CommandTerm;
  criterion: Criterion;
  marks: number;
  en: { question: string; answer: string };
  ru: { question: string; answer: string };
}

interface PracticeQuestionsProps {
  questions: PracticeQuestion[];
}

const COMMAND_TERM_STYLE: Record<CommandTerm, { bg: string; text: string; border: string }> = {
  state: { bg: 'rgba(168, 184, 200, 0.25)', text: '#6b5b47', border: 'var(--color-accent-sky)' },
  describe: { bg: 'rgba(168, 181, 160, 0.25)', text: '#6b5b47', border: 'var(--color-accent-sage)' },
  explain: { bg: 'rgba(201, 168, 118, 0.25)', text: '#6b5b47', border: 'var(--color-accent-warm)' },
  compare: { bg: 'rgba(201, 154, 142, 0.25)', text: '#6b5b47', border: 'var(--color-accent-clay)' },
  evaluate: { bg: 'rgba(107, 91, 71, 0.18)', text: '#3d2f1f', border: '#6b5b47' },
  calculate: { bg: 'rgba(61, 47, 31, 0.12)', text: '#3d2f1f', border: '#3d2f1f' },
};

export function PracticeQuestions({ questions }: PracticeQuestionsProps) {
  const { t, i18n } = useTranslation('common');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <div className="space-y-3">
      <p className="text-sm text-text-secondary mb-4">{t('practice.intro')}</p>
      {questions.map((q) => (
        <QuestionCard key={q.id} q={q} lang={lang} />
      ))}
    </div>
  );
}

function QuestionCard({ q, lang }: { q: PracticeQuestion; lang: 'ru' | 'en' }) {
  const { t } = useTranslation('common');
  const [revealed, setRevealed] = useState(false);
  const style = COMMAND_TERM_STYLE[q.commandTerm];

  return (
    <article
      className="bg-bg-secondary border border-border rounded-lg shadow-card overflow-hidden"
      style={{ borderLeft: `4px solid ${style.border}` }}
    >
      <div className="px-5 py-4">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded"
              style={{ background: style.bg, color: style.text }}
            >
              {t(`practice.commandTerms.${q.commandTerm}`)}
            </span>
            <span
              className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded border"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
            >
              Criterion {q.criterion}
            </span>
          </div>
          <span className="text-xs text-text-muted font-mono">
            [{q.marks} {t('practice.marks', { count: q.marks })}]
          </span>
        </div>
        <p className="text-text-primary leading-relaxed">{q[lang].question}</p>
      </div>
      <button
        onClick={() => setRevealed((r) => !r)}
        className="w-full flex items-center justify-between gap-2 px-5 py-2.5 border-t border-border bg-bg-primary/50 hover:bg-bg-tertiary/40 text-sm text-text-secondary transition-colors"
        aria-expanded={revealed}
      >
        <span className="flex items-center gap-2">
          {revealed ? <EyeOff size={14} /> : <Eye size={14} />}
          {revealed ? t('practice.hideAnswer') : t('practice.showAnswer')}
        </span>
        <ChevronDown size={16} className={`transition-transform ${revealed ? 'rotate-180' : ''}`} />
      </button>
      {revealed ? (
        <div className="px-5 py-4 border-t border-border bg-bg-tertiary/30">
          <p className="text-xs uppercase tracking-wider text-text-muted mb-1.5">
            {t('practice.modelAnswer')}
          </p>
          <p className="text-sm text-text-primary leading-relaxed whitespace-pre-line">
            {q[lang].answer}
          </p>
        </div>
      ) : null}
    </article>
  );
}
