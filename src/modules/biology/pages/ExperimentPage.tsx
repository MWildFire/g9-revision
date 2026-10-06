import type { DefinitionReview } from '../../../components/content/definitionReview';
import { FlaskRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection, KeyValueSection } from '../components/BiologyTopicLayout';

const VARIABLES = ['independent', 'dependent', 'controlled'];

export function ExperimentPage() {
  const { t, i18n } = useTranslation('biology');
  const labels = i18n.language.startsWith('ru') ? ['Независимая', 'Зависимая', 'Контролируемые'] : ['Independent', 'Dependent', 'Controlled'];
  return (
    <BiologyTopicLayout topicKey="experiment" icon={<FlaskRound size={28} />}>
      <KeyValueSection
        title={t('experiment.sections.variables.title')} review={t('experiment.sections.variables.review', { returnObjects: true }) as DefinitionReview}
        pairs={VARIABLES.map((v, index) => ({ label: labels[index], body: t(`experiment.sections.variables.items.${v}`) }))}
      />
      <InfoSection
        title={t('experiment.sections.hypothesis.title')}
        body={t('experiment.sections.hypothesis.body')} review={t('experiment.sections.hypothesis.review', { returnObjects: true }) as DefinitionReview}
        borderColor="var(--color-accent-sky)"
      />
      <InfoSection
        title={t('experiment.sections.method.title')}
        body={t('experiment.sections.method.body')} review={t('experiment.sections.method.review', { returnObjects: true }) as DefinitionReview}
      />
      <InfoSection
        title={t('experiment.sections.data.title')}
        body={t('experiment.sections.data.body')} review={t('experiment.sections.data.review', { returnObjects: true }) as DefinitionReview}
      />
      <InfoSection
        title={t('experiment.sections.evaluation.title')}
        body={t('experiment.sections.evaluation.body')} review={t('experiment.sections.evaluation.review', { returnObjects: true }) as DefinitionReview}
      />
    </BiologyTopicLayout>
  );
}
