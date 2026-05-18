import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';

const DEVICES = ['metaphor', 'simile', 'anaphora', 'alliteration', 'personification', 'hyperbole', 'rhetoricalQuestion', 'imagery', 'onomatopoeia', 'irony', 'symbolism', 'foreshadowing'];

export function DevicesPage() {
  const { t } = useTranslation('english');
  return (
    <div>
      <TopicHero title={t('devicesPage.title')} intro={t('devicesPage.intro')} icon={<Sparkles size={28} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        {DEVICES.map((id) => (
          <article key={id} className="bg-bg-secondary border border-border rounded-md p-4">
            <h3 className="font-serif text-lg font-medium mb-1">{t(`devices.${id}.name`)}</h3>
            <p className="text-sm text-text-secondary mb-2">{t(`devices.${id}.definition`)}</p>
            <p className="text-sm italic text-text-muted">"{t(`devices.${id}.example`)}"</p>
          </article>
        ))}
      </div>
    </div>
  );
}
