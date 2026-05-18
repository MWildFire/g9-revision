import { Droplet } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';
import { PHIndicator } from '../../../components/simulations/chemistry/PHIndicator';
import { SectionHeading } from '../../../components/content/TopicHero';

const DEFS = ['acid', 'base', 'alkali', 'salt'];
const INDICATORS = ['litmus', 'phenolphthalein', 'universal'];
const REACTIONS = ['metal', 'base', 'carbonate', 'alkali'];

export function AcidsBasesPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="acidsBases" icon={<Droplet size={28} />}>
      <ChemSection
        title={t('acidsBases.sections.definitions.title')}
        items={DEFS.map((k) => ({ key: k, text: t(`acidsBases.sections.definitions.items.${k}`) }))}
      />
      <ChemSection
        title={t('acidsBases.sections.pH.title')}
        body={t('acidsBases.sections.pH.body')}
        borderColor="var(--color-accent-sky-deep)"
      />
      <ChemSection
        title={t('acidsBases.sections.indicators.title')}
        items={INDICATORS.map((k) => ({ key: k, text: t(`acidsBases.sections.indicators.items.${k}`) }))}
      />
      <ChemSection
        title={t('acidsBases.sections.reactions.title')}
        items={REACTIONS.map((k) => ({ key: k, text: t(`acidsBases.sections.reactions.items.${k}`) }))}
      />
      <SectionHeading>Interactive — pH Indicator</SectionHeading>
      <PHIndicator />
    </ChemistryTopicLayout>
  );
}
