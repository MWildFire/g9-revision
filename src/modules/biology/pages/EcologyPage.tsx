import { TreePine } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection } from '../components/BiologyTopicLayout';

const SECTIONS = ['levels', 'foodChains', 'carbonCycle', 'waterCycle', 'humanImpact'];

export function EcologyPage() {
  const { t } = useTranslation('biology');
  return (
    <BiologyTopicLayout topicKey="ecology" icon={<TreePine size={28} />}>
      {SECTIONS.map((s) => (
        <InfoSection
          key={s}
          title={t(`ecology.sections.${s}.title`)}
          body={t(`ecology.sections.${s}.body`)}
          borderColor="var(--color-accent-sage)"
        />
      ))}
    </BiologyTopicLayout>
  );
}
