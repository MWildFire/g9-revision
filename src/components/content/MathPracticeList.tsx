import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Eye, EyeOff, BookMarked } from 'lucide-react';
import type { MathProblem } from '../../modules/math/data/practiceProblems';

interface Props {
  problems: MathProblem[];
}

export function MathPracticeList({ problems }: Props) {
  const { t, i18n } = useTranslation('math');
  const tCommon = useTranslation('common').t;
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  if (problems.length === 0) {
    return <p className="text-sm text-text-muted">{t('simulations.comingSoon')}</p>;
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-text-secondary mb-2">
        {tCommon('practice.intro')}
      </p>
      {problems.map((p) => (
        <ProblemCard key={p.id} problem={p} lang={lang} />
      ))}
    </div>
  );
}

function ProblemCard({ problem, lang }: { problem: MathProblem; lang: 'ru' | 'en' }) {
  const { t } = useTranslation('common');
  const tMath = useTranslation('math').t;
  const [revealed, setRevealed] = useState(false);
  const content = problem[lang];

  const sourceLabel =
    problem.source === 'standard-mp'
      ? tMath('sources.standard') + ' · ' + tMath('sources.mixedPractice')
      : problem.source === 'standard-ric'
        ? tMath('sources.standard') + ' · ' + tMath('sources.reviewInContext')
        : problem.source === 'extended-mp'
          ? tMath('sources.extended') + ' · ' + tMath('sources.mixedPractice')
          : tMath('sources.extended') + ' · ' + tMath('sources.reviewInContext');

  const accentColor =
    problem.source.startsWith('extended')
      ? 'var(--color-accent-clay)'
      : 'var(--color-accent-sky)';

  return (
    <article
      className="bg-bg-secondary border border-border rounded-lg shadow-card overflow-hidden"
      style={{ borderLeft: `4px solid ${accentColor}` }}
    >
      <div className="px-5 py-4">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span
              className="font-mono px-2 py-0.5 rounded border"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              {tMath('sources.chapter')} {problem.chapter} Q{problem.questionNumber}
            </span>
            <span className="inline-flex items-center gap-1 text-text-muted">
              <BookMarked size={11} />
              {sourceLabel}
            </span>
            {problem.criterion ? (
              <span
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                Criterion {problem.criterion}
              </span>
            ) : null}
          </div>
        </div>
        <p className="text-text-primary leading-relaxed whitespace-pre-line">
          {content.question}
        </p>
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
          {content.workingSteps && content.workingSteps.length > 0 ? (
            <div className="mb-3">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-1.5">
                {t('sections.workedSolutions')}
              </p>
              <ol className="space-y-1 text-sm">
                {content.workingSteps.map((step, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-text-muted font-mono shrink-0">{i + 1}.</span>
                    <span className="whitespace-pre-line">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          <div>
            <p className="text-xs uppercase tracking-wider text-text-muted mb-1.5">
              {t('practice.modelAnswer')}
            </p>
            <p className="text-sm font-medium whitespace-pre-line">{content.answer}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}
