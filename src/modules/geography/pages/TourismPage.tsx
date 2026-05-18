import { useTranslation } from 'react-i18next';
import { Plane } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { ButlerModel } from '../../../components/simulations/geography/ButlerModel';
import { ActiveRecallBlock } from '../../../components/content/ActiveRecallBlock';

const TYPES = ['mass', 'thanatourism', 'ecotourism', 'medical', 'extreme', 'voluntourism', 'nature'];

export function TourismPage() {
  const { t } = useTranslation('geography');
  const TOPIC = 'tourism';

  return (
    <div>
      <TopicHero title={t('tourism.title')} intro={t('tourism.intro')} icon={<Plane size={28} />} />

      <SectionHeading>{t('tourism.sections.types.title')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {TYPES.map((id) => (
          <div key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-3 text-sm">
            {t(`tourism.sections.types.items.${id}`)}
          </div>
        ))}
      </div>

      <SectionHeading>{t('tourism.sections.butler.title')}</SectionHeading>
      <ButlerModel />

      <SectionHeading>{t('tourism.sections.jamaica.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
        <div>
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Positives</h4>
          {t('tourism.sections.jamaica.positives')}
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Negatives</h4>
          {t('tourism.sections.jamaica.negatives')}
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Management</h4>
          {t('tourism.sections.jamaica.management')}
        </div>
      </div>

      <SectionHeading>Active recall</SectionHeading>
      <div className="space-y-3">
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="butler-stages"
          prompt="Name the six stages of the Butler Model in order."
          modelAnswer="1) Exploration, 2) Involvement, 3) Development, 4) Consolidation, 5) Stagnation, 6) Decline or Rejuvenation."
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="tourism-types"
          prompt="Give one example each of: mass tourism, ecotourism, extreme tourism."
          modelAnswer="Mass: Spanish costas. Eco: Costa Rica. Extreme: Antarctica."
        />
      </div>
    </div>
  );
}
