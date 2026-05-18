import { Gauge } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';

const FACTORS = ['temperature', 'concentration', 'surfaceArea', 'catalyst'];

export function RatesPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="rates" icon={<Gauge size={28} />}>
      <ChemSection title={t('rates.sections.definition.title')} body={t('rates.sections.definition.body')} borderColor="var(--color-accent-sky)" />
      <ChemSection title={t('rates.sections.collision.title')} body={t('rates.sections.collision.body')} borderColor="var(--color-accent-warm)" />
      <ChemSection title={t('rates.sections.factors.title')} items={FACTORS.map((k) => ({ key: k, text: t(`rates.sections.factors.items.${k}`) }))} />
      <ChemSection title={t('rates.sections.graphs.title')} body={t('rates.sections.graphs.body')} borderColor="var(--color-accent-sage)" />
      <ChemSection title={t('rates.sections.experiments.title')} body={t('rates.sections.experiments.body')} borderColor="var(--color-accent-clay)" />
    </ChemistryTopicLayout>
  );
}
