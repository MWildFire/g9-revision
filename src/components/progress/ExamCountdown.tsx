import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';
import { useExamCountdown } from '../../hooks/useExamCountdown';

interface Props {
  variant?: 'compact' | 'hero';
}

export function ExamCountdown({ variant = 'compact' }: Props) {
  const { days, weeks } = useExamCountdown();
  const { t } = useTranslation('common');

  if (variant === 'hero') {
    return (
      <div className="inline-flex flex-col items-center bg-bg-secondary border border-border rounded-lg shadow-card px-8 py-6">
        <div className="flex items-center gap-2 text-text-secondary text-sm uppercase tracking-wider mb-2">
          <Calendar size={14} />
          {t('countdown.untilExam')}
        </div>
        <div className="font-serif text-5xl font-medium text-text-primary">
          {days}
        </div>
        <div className="text-sm text-text-muted">
          {t('countdown.days', { count: days })} · {t('countdown.weeks', { count: weeks })}
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-tertiary/60 border border-border rounded-md text-sm">
      <Calendar size={14} className="text-text-muted" />
      <span className="font-medium text-text-primary">{days}</span>
      <span className="text-text-secondary">{t('countdown.daysShort')}</span>
    </div>
  );
}
