import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection } from '../components/BiologyTopicLayout';

const SYSTEMS = ['circulatory', 'respiratory', 'digestive', 'nervous', 'endocrine'];

export function BodySystemsPage() {
  const { t } = useTranslation('biology');
  return (
    <BiologyTopicLayout topicKey="bodySystems" icon={<Heart size={28} />}>
      {SYSTEMS.map((sys) => (
        <InfoSection
          key={sys}
          title={t(`bodySystems.sections.${sys}.title`)}
          body={t(`bodySystems.sections.${sys}.body`)}
          borderColor="var(--color-accent-clay)"
        />
      ))}
    </BiologyTopicLayout>
  );
}
