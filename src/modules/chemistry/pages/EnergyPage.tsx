import { Flame } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';
import { EnergyProfile } from '../../../components/simulations/chemistry/EnergyProfile';
import { SectionHeading } from '../../../components/content/TopicHero';
import { DetailedItem } from '../../../components/content/DetailedCard';

const TYPES = ['exothermic', 'endothermic'];

export function EnergyPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="energy" icon={<Flame size={28} />}>
      <ChemSection
        title={t('energy.sections.types.title')}
        detailedItems={TYPES.map((k) => t(`energy.sections.types.detailed.${k}`, { returnObjects: true }) as DetailedItem)}
        borderColor="var(--color-accent-warm)"
      />
      <ChemSection
        title={t('energy.sections.profiles.title')}
        body={t('energy.sections.profiles.body')}
        borderColor="var(--color-accent-clay)"
      />
      <ChemSection
        title={t('energy.sections.bondEnergies.title')}
        body={t('energy.sections.bondEnergies.body')}
      />
      <ChemSection
        title={t('energy.sections.calorimetry.title')}
        body={t('energy.sections.calorimetry.body')}
        borderColor="var(--color-accent-warm)"
      />
      <SectionHeading>Interactive — Energy Profile</SectionHeading>
      <EnergyProfile />
    </ChemistryTopicLayout>
  );
}
