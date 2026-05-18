import { useTranslation } from 'react-i18next';
import { GraduationCap, AlertCircle } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const SIMPLE_TOPICS = ['introduce', 'clothes', 'colours', 'seasons'];

export function MrsHalaPage() {
  const { t } = useTranslation('arabic');
  const arFont = '"Noto Sans Arabic", "Amiri", serif';

  const renderItems = (key: string, listKey: string) => {
    const items = (t(`topicsContent.${key}.${listKey}`, { returnObjects: true }) as string[]) ?? [];
    return (
      <ul className="space-y-2">
        {items.map((s, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm" style={{ fontFamily: 'inherit' }}>
            <span style={{ fontFamily: arFont }}>{s}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <TopicHero title={t('mrsHalaPage.title')} intro={t('mrsHalaPage.intro')} icon={<GraduationCap size={28} />} />

      <div className="mt-6 flex items-start gap-3 bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-olive)', borderLeftWidth: '4px' }}>
        <AlertCircle size={18} className="text-accent-olive shrink-0 mt-0.5" />
        <p className="text-sm">{t('mrsHalaPage.notice')}</p>
      </div>

      {SIMPLE_TOPICS.map((k) => {
        const listKey = k === 'introduce' ? 'phrases' : 'vocab';
        return (
          <div key={k}>
            <SectionHeading>{t(`topicsContent.${k}.title`)}</SectionHeading>
            {renderItems(k, listKey)}
          </div>
        );
      })}

      <SectionHeading>{t('topicsContent.routine.title')}</SectionHeading>
      <div className="mb-3">
        <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2">Verbs / Глаголы</h4>
        {renderItems('routine', 'verbs')}
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2">Times & connectors / Время и связки</h4>
        {renderItems('routine', 'times')}
      </div>

      <SectionHeading>{t('topicsContent.extra.title')}</SectionHeading>
      {renderItems('extra', 'items')}

      <SectionHeading>{t('topicsContent.exercises.title')}</SectionHeading>
      <ul className="space-y-2">
        {((t('topicsContent.exercises.items', { returnObjects: true }) as string[]) ?? []).map((s, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{s}</li>
        ))}
      </ul>
    </div>
  );
}
