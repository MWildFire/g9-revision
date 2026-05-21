import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const DEVICES = ['metaphor', 'simile', 'anaphora', 'alliteration', 'personification', 'hyperbole', 'rhetoricalQuestion', 'imagery', 'onomatopoeia', 'irony', 'symbolism', 'foreshadowing'];

export function DevicesPage() {
  const { t, i18n } = useTranslation('english');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { rule: 'Правило', use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;

  return (
    <div>
      <TopicHero title={t('devicesPage.title')} intro={t('devicesPage.intro')} icon={<Sparkles size={28} />} />
      <div className="space-y-3 mt-8">
        {DEVICES.map((id) => {
          const item = t(`devices.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-warm)" labels={labels} />;
        })}
      </div>
    </div>
  );
}
