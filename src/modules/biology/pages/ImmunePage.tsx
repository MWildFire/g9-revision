import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection } from '../components/BiologyTopicLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const DISEASE_TYPES = ['communicable', 'nonCommunicable', 'lifestyle', 'global'];
const PATHOGENS = ['bacteria', 'viruses', 'fungi', 'protists'];
const BODY_SECTIONS = ['barriers', 'immuneResponse', 'vaccination', 'antibiotics'];

export function ImmunePage() {
  const { t } = useTranslation('biology');
  const diseaseTypes = DISEASE_TYPES.map((k) => t(`immune.sections.diseaseTypes.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const pathogens = PATHOGENS.map((k) => t(`immune.sections.pathogens.detailed.${k}`, { returnObjects: true }) as DetailedItem);

  return (
    <BiologyTopicLayout topicKey="immune" icon={<Shield size={28} />}>
      <InfoSection
        title={t('immune.sections.diseaseTypes.title')}
        detailedItems={diseaseTypes}
        borderColor="var(--color-accent-clay)"
      />
      <InfoSection
        title={t('immune.sections.pathogens.title')}
        detailedItems={pathogens}
        borderColor="var(--color-accent-warm)"
      />
      {BODY_SECTIONS.map((s) => (
        <InfoSection
          key={s}
          title={t(`immune.sections.${s}.title`)}
          body={t(`immune.sections.${s}.body`)}
          borderColor="var(--color-accent-sage)"
        />
      ))}
    </BiologyTopicLayout>
  );
}
