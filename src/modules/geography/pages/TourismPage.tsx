import { useTranslation } from 'react-i18next';
import { Plane } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { ButlerModel } from '../../../components/simulations/geography/ButlerModel';
import { ActiveRecallBlock } from '../../../components/content/ActiveRecallBlock';

const TYPES = ['mass', 'thanatourism', 'ecotourism', 'medical', 'extreme', 'voluntourism', 'nature'];
const OTHER_TYPES = ['thana', 'medical', 'eco', 'volun', 'extreme'];

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
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-3" style={{ borderLeftColor: 'var(--color-accent-warm)', borderLeftWidth: '3px' }}>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Key facts</h4>
          {t('tourism.sections.jamaica.facts')}
        </div>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Attractions</h4>
          {t('tourism.sections.jamaica.attractions')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm pt-2 border-t border-border">
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
      </div>

      <SectionHeading>{t('tourism.sections.antarctica.title')}</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-3" style={{ borderLeftColor: 'var(--color-accent-sky-deep)', borderLeftWidth: '3px' }}>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Key facts</h4>
          {t('tourism.sections.antarctica.facts')}
        </div>
        <div className="text-sm">
          <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Why is this growing?</h4>
          {t('tourism.sections.antarctica.whyGrowing')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm pt-2 border-t border-border">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Positives</h4>
            {t('tourism.sections.antarctica.positives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Negatives</h4>
            {t('tourism.sections.antarctica.negatives')}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-1">Management</h4>
            {t('tourism.sections.antarctica.management')}
          </div>
        </div>
      </div>

      <SectionHeading>{t('tourism.sections.otherTypes.title')}</SectionHeading>
      <ul className="space-y-2">
        {OTHER_TYPES.map((id) => (
          <li key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
            {t(`tourism.sections.otherTypes.items.${id}`)}
          </li>
        ))}
      </ul>

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
          blockId="jamaica-impacts"
          prompt="State three positive and three negative SEEP impacts of mass tourism in Jamaica."
          modelAnswer="Positives: 20% of GDP; 220,000 jobs; tax revenue. Negatives: profit leakage to TNCs; seasonal jobs; environmental damage."
        />
        <ActiveRecallBlock
          topicId={TOPIC}
          blockId="antarctica-management"
          prompt="State two ways tourism in Antarctica is managed under the Antarctic Treaty."
          modelAnswer="Boats limited to 500 passengers. Permits required (violations = 1 year jail + fine). SSSIs off-limits to tourists."
        />
      </div>
    </div>
  );
}
