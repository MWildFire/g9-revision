import { Atom } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';

const SECTIONS = ['atomicStructure', 'isotopes', 'electronConfig', 'periodicTable', 'trends'];

export function AtomsPeriodicPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="atomsPeriodic" icon={<Atom size={28} />}>
      {SECTIONS.map((s) => (
        <ChemSection
          key={s}
          title={t(`atomsPeriodic.sections.${s}.title`)}
          body={t(`atomsPeriodic.sections.${s}.body`)}
          borderColor="var(--color-accent-clay)"
        />
      ))}
    </ChemistryTopicLayout>
  );
}
