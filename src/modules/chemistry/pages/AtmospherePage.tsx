import { Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const CLIMATE = ['cause', 'evidence', 'consequences', 'mitigation', 'adaptation'];
const POLLUTANTS = ['co2', 'co', 'soot', 'sox', 'nox'];

export function AtmospherePage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="atmosphere" icon={<Wind size={28} />}>
      <ChemSection title={t('atmosphere.sections.history.title')} body={t('atmosphere.sections.history.body')} borderColor="var(--color-accent-sky-deep)" />
      <ChemSection title={t('atmosphere.sections.carbonRocks.title')} body={t('atmosphere.sections.carbonRocks.body')} borderColor="var(--color-accent-clay)" />
      <ChemSection title={t('atmosphere.sections.greenhouse.title')} body={t('atmosphere.sections.greenhouse.body')} borderColor="var(--color-accent-warm)" />
      <ChemSection
        title={t('atmosphere.sections.climateChange.title')}
        detailedItems={CLIMATE.map((k) => t(`atmosphere.sections.climateChange.detailed.${k}`, { returnObjects: true }) as DetailedItem)}
        borderColor="var(--color-accent-clay)"
      />
      <ChemSection
        title={t('atmosphere.sections.pollutants.title')}
        detailedItems={POLLUTANTS.map((k) => t(`atmosphere.sections.pollutants.detailed.${k}`, { returnObjects: true }) as DetailedItem)}
        borderColor="var(--color-accent-warm)"
      />
    </ChemistryTopicLayout>
  );
}
