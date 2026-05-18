import { FlaskRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';

const TYPE_KEYS = ['combination', 'decomposition', 'displacement', 'doubleDisplacement', 'combustion', 'neutralisation'];

export function ReactionsPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="reactions" icon={<FlaskRound size={28} />}>
      <ChemSection
        title={t('reactions.sections.types.title')}
        items={TYPE_KEYS.map((k) => ({ key: k, text: t(`reactions.sections.types.items.${k}`) }))}
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
