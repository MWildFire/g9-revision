import { FlaskRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const TYPE_KEYS = ['combination', 'decomposition', 'displacement', 'doubleDisplacement', 'combustion', 'neutralisation'];

export function ReactionsPage() {
  const { t } = useTranslation('chemistry');
  const types = TYPE_KEYS.map((k) => t(`reactions.sections.types.detailed.${k}`, { returnObjects: true }) as DetailedItem);

  return (
    <ChemistryTopicLayout topicKey="reactions" icon={<FlaskRound size={28} />}>
      <ChemSection
        title={t('reactions.sections.types.title')}
        detailedItems={types}
        borderColor="var(--color-accent-clay)"
      />
      <ChemSection
        title={t('reactions.sections.balancing.title')}
        body={t('reactions.sections.balancing.body')}
        borderColor="var(--color-accent-warm)"
      />
      <ChemSection
        title={t('reactions.sections.stateSymbols.title')}
        body={t('reactions.sections.stateSymbols.body')}
      />
      <ChemSection
        title={t('reactions.sections.ionic.title')}
        body={t('reactions.sections.ionic.body')}
        borderColor="var(--color-accent-sage)"
      />
    </ChemistryTopicLayout>
  );
}
