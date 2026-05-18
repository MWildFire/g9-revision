import { Microscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection, KeyValueSection } from '../components/BiologyTopicLayout';

const STRUCTURE_PARTS = ['nucleus', 'cytoplasm', 'membrane', 'mitochondria', 'ribosome', 'wall', 'chloroplast', 'vacuole'];
const SPECIALISED = ['redBlood', 'neurone', 'sperm', 'egg', 'root', 'palisade'];

export function CellsPage() {
  const { t } = useTranslation('biology');
  return (
    <BiologyTopicLayout topicKey="cells" icon={<Microscope size={28} />}>
      <InfoSection
        title={t('cells.sections.structure.title')}
        items={STRUCTURE_PARTS.map((k) => ({ key: k, text: t(`cells.sections.structure.items.${k}`) }))}
      />
      <KeyValueSection
        title={t('cells.sections.animalVsPlant.title')}
        pairs={[
          { label: 'Both animal & plant', body: t('cells.sections.animalVsPlant.shared') },
          { label: 'Plant only', body: t('cells.sections.animalVsPlant.plantOnly') },
        ]}
      />
      <InfoSection
        title={t('cells.sections.specialised.title')}
        items={SPECIALISED.map((k) => ({ key: k, text: t(`cells.sections.specialised.items.${k}`) }))}
      />
      <KeyValueSection
        title={t('cells.sections.transport.title')}
        pairs={[
          { label: 'Diffusion', body: t('cells.sections.transport.diffusion') },
          { label: 'Osmosis', body: t('cells.sections.transport.osmosis') },
          { label: 'Active transport', body: t('cells.sections.transport.activeTransport') },
        ]}
      />
    </BiologyTopicLayout>
  );
}
