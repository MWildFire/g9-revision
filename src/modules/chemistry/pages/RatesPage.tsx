import { ReactionRateGraph } from '../../../components/simulations/chemistry/ReactionRateGraph';
import type { DefinitionReview } from '../../../components/content/definitionReview';
import { Gauge } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const FACTORS = ['temperature', 'concentration', 'surfaceArea', 'catalyst'];

export function RatesPage() {
  const { t } = useTranslation('chemistry');
  const factors = FACTORS.map((k) => t(`rates.sections.factors.detailed.${k}`, { returnObjects: true }) as DetailedItem);

  return (
    <ChemistryTopicLayout topicKey="rates" icon={<Gauge size={28} />}>
      <ChemSection title={t('rates.sections.definition.title')} body={t('rates.sections.definition.body')} review={t('rates.sections.definition.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-sky)" />
      <ChemSection title={t('rates.sections.collision.title')} body={t('rates.sections.collision.body')} review={t('rates.sections.collision.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-warm)" />
      <ChemSection title={t('rates.sections.factors.title')} detailedItems={factors} borderColor="var(--color-accent-clay)" />
      <ChemSection title={t('rates.sections.graphs.title')} body={t('rates.sections.graphs.body')} review={t('rates.sections.graphs.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-sage)" />
      <ReactionRateGraph />
      <ChemSection title={t('rates.sections.experiments.title')} body={t('rates.sections.experiments.body')} review={t('rates.sections.experiments.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-clay)" />
    </ChemistryTopicLayout>
  );
}
