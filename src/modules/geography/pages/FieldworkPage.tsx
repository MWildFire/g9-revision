import { useTranslation } from 'react-i18next';
import { ClipboardList } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

interface Section {
  body?: string;
  items?: Record<string, string>;
}

const SECTIONS: { key: string; type: 'items' | 'body' }[] = [
  { key: 'aimHypothesis', type: 'items' },
  { key: 'dataTypes', type: 'items' },
  { key: 'sampling', type: 'items' },
  { key: 'methodology', type: 'body' },
  { key: 'presentation', type: 'items' },
  { key: 'analysis', type: 'body' },
  { key: 'conclusionsEvaluation', type: 'items' },
];

export function FieldworkPage() {
  const { t } = useTranslation('geography');
  return (
    <div>
      <TopicHero title={t('fieldwork.title')} intro={t('fieldwork.intro')} icon={<ClipboardList size={28} />} />
      {SECTIONS.map(({ key, type }) => {
        const sectionTitle = t(`fieldwork.sections.${key}.title`);
        if (type === 'body') {
          return (
            <div key={key}>
              <SectionHeading>{sectionTitle}</SectionHeading>
              <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderLeftColor: 'var(--color-accent-sky-deep)', borderLeftWidth: '3px' }}>
                {t(`fieldwork.sections.${key}.body`)}
              </p>
            </div>
          );
        }
        const items = t(`fieldwork.sections.${key}.items`, { returnObjects: true }) as Record<string, string>;
        return (
          <div key={key}>
            <SectionHeading>{sectionTitle}</SectionHeading>
            <ul className="space-y-2">
              {Object.entries(items).map(([k, v]) => (
                <li key={k} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{v}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
