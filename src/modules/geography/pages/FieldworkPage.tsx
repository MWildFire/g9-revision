import { useTranslation } from 'react-i18next';
import { ClipboardList } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const SECTIONS: { key: string; type: 'detailed' | 'body' }[] = [
  { key: 'aimHypothesis', type: 'detailed' },
  { key: 'dataTypes', type: 'detailed' },
  { key: 'sampling', type: 'detailed' },
  { key: 'methodology', type: 'body' },
  { key: 'presentation', type: 'detailed' },
  { key: 'analysis', type: 'body' },
  { key: 'conclusionsEvaluation', type: 'detailed' },
];

export function FieldworkPage() {
  const { t, i18n } = useTranslation('geography');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;

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
        const detailedMap = t(`fieldwork.sections.${key}.detailed`, { returnObjects: true }) as Record<string, DetailedItem>;
        return (
          <div key={key}>
            <SectionHeading>{sectionTitle}</SectionHeading>
            <div className="space-y-3">
              {Object.entries(detailedMap).map(([k, item]) => (
                <DetailedCard key={k} item={item} borderColor="var(--color-accent-sky-deep)" labels={labels} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
