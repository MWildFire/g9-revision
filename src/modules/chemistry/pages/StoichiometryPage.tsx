import { Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';

const SECTIONS = ['moles', 'molarMass', 'calculations', 'limiting', 'percentYield'];

export function StoichiometryPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="stoichiometry" icon={<Calculator size={28} />}>
      {SECTIONS.map((s) => (
        <ChemSection
          key={s}
          title={t(`stoichiometry.sections.${s}.title`)}
          body={t(`stoichiometry.sections.${s}.body`)}
          borderColor="var(--color-accent-sky)"
        />
      ))}
    </ChemistryTopicLayout>
  );
}
