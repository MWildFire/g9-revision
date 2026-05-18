import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection } from '../components/BiologyTopicLayout';

const SECTIONS = ['pathogens', 'barriers', 'immuneResponse', 'vaccination', 'antibiotics'];

export function ImmunePage() {
  const { t } = useTranslation('biology');
  return (
    <BiologyTopicLayout topicKey="immune" icon={<Shield size={28} />}>
      {SECTIONS.map((s) => (
        <InfoSection
          key={s}
          title={t(`immune.sections.${s}.title`)}
          body={t(`immune.sections.${s}.body`)}
          borderColor="var(--color-accent-clay)"
        />
      ))}
    </BiologyTopicLayout>
  );
}
