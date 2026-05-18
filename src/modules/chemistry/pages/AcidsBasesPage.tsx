import { Droplet } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';
import { PHIndicator } from '../../../components/simulations/chemistry/PHIndicator';
import { SectionHeading } from '../../../components/content/TopicHero';

const DEFS = ['acid', 'base', 'alkali', 'salt'];
const INDICATORS = ['litmus', 'phenolphthalein', 'universal', 'methylOrange'];
const REACTIONS = ['metal', 'base', 'carbonate', 'alkali'];

export function AcidsBasesPage() {
  const { t } = useTranslation('chemistry');
  const defs = DEFS.map((k) => t(`acidsBases.sections.definitions.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const inds = INDICATORS.map((k) => t(`acidsBases.sections.indicators.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const reactions = REACTIONS.map((k) => t(`acidsBases.sections.reactions.detailed.${k}`, { returnObjects: true }) as DetailedItem);

  return (
    <ChemistryTopicLayout topicKey="acidsBases" icon={<Droplet size={28} />}>
      <ChemSection
        title={t('acidsBases.sections.definitions.title')}
        detailedItems={defs}
        borderColor="var(--color-accent-clay)"
      />
      <ChemSection
        title={t('acidsBases.sections.pH.title')}
        body={t('acidsBases.sections.pH.body')}
        borderColor="var(--color-accent-sky-deep)"
      />
      <ChemSection
        title={t('acidsBases.sections.indicators.title')}
        detailedItems={inds}
        borderColor="var(--color-accent-warm)"
      />
      <ChemSection
        title={t('acidsBases.sections.reactions.title')}
        detailedItems={reactions}
        borderColor="var(--color-accent-sage)"
      />
      <SectionHeading>Interactive — pH Indicator</SectionHeading>
      <PHIndicator />
    </ChemistryTopicLayout>
  );
}
