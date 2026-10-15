import { Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection } from '../components/BiologyTopicLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const PROCESS_KEYS = ['equation', 'location', 'factors', 'uses', 'experiments'];
const BIOTECH_KEYS = ['definition', 'techniques', 'applications', 'ethics'];

export function PhotosynthesisPage() {
  const { t } = useTranslation('biology');
  const biotechItems = BIOTECH_KEYS.map((k) => t(`photosynthesis.sections.biotech.detailed.${k}`, { returnObjects: true }) as DetailedItem);

  return (
    <BiologyTopicLayout topicKey="photosynthesis" icon={<Sun size={28} />}>
      <PhotosynthesisLesson />
      <InfoSection
        title={t('photosynthesis.sections.biotech.title')}
        detailedItems={biotechItems}
        borderColor="var(--color-accent-warm)"
      />
    </BiologyTopicLayout>
  );
}

// The November plant lesson embeds this section, without a second page hero or biotechnology.
export function PhotosynthesisLesson() {
  const { t } = useTranslation('biology');
  const processItems = PROCESS_KEYS.map((k) => t(`photosynthesis.sections.process.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  return (
      <InfoSection
        title={t('photosynthesis.sections.process.title')}
        detailedItems={processItems}
        borderColor="var(--color-accent-sage)"
      />
  );
}
