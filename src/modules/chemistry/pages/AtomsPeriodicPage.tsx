import type { DefinitionReview } from '../../../components/content/definitionReview';
import { Atom } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';
import { AtomBuilder } from '../../../components/simulations/chemistry/AtomBuilder';
import { SectionHeading } from '../../../components/content/TopicHero';

const SECTIONS = ['atomicStructure', 'isotopes', 'electronConfig', 'periodicTable', 'trends'];

export function AtomsPeriodicPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="atomsPeriodic" icon={<Atom size={28} />}>
      {SECTIONS.map((s) => (
        <ChemSection
          key={s}
          title={t(`atomsPeriodic.sections.${s}.title`)}
          body={t(`atomsPeriodic.sections.${s}.body`)} review={t(`atomsPeriodic.sections.${s}.review`, { returnObjects: true }) as DefinitionReview}
          borderColor="var(--color-accent-clay)"
        />
      ))}
      <SectionHeading>{t('simulations.atomBuilder.title')}</SectionHeading>
      <AtomBuilder />
    </ChemistryTopicLayout>
  );
}
