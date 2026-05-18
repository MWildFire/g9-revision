import { FlaskRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection, KeyValueSection } from '../components/BiologyTopicLayout';

const VARIABLES = ['independent', 'dependent', 'controlled'];

export function ExperimentPage() {
  const { t } = useTranslation('biology');
  return (
    <BiologyTopicLayout topicKey="experiment" icon={<FlaskRound size={28} />}>
      <KeyValueSection
        title={t('experiment.sections.variables.title')}
        pairs={VARIABLES.map((v) => ({ label: v[0].toUpperCase() + v.slice(1), body: t(`experiment.sections.variables.items.${v}`) }))}
      />
      <InfoSection
        title={t('experiment.sections.hypothesis.title')}
        body={t('experiment.sections.hypothesis.body')}
        borderColor="var(--color-accent-sky)"
      />
      <InfoSection
        title={t('experiment.sections.method.title')}
        body={t('experiment.sections.method.body')}
      />
      <InfoSection
        title={t('experiment.sections.data.title')}
        body={t('experiment.sections.data.body')}
      />
      <InfoSection
        title={t('experiment.sections.evaluation.title')}
        body={t('experiment.sections.evaluation.body')}
      />
    </BiologyTopicLayout>
  );
}
