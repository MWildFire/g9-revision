import { Microscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection, KeyValueSection } from '../components/BiologyTopicLayout';
import { CellDiagram } from '../../../components/simulations/biology/CellDiagram';
import { SectionHeading } from '../../../components/content/TopicHero';
import { DetailedItem } from '../../../components/content/DetailedCard';

const STRUCTURE_PARTS = ['nucleus', 'cytoplasm', 'membrane', 'mitochondria', 'ribosome', 'wall', 'chloroplast', 'vacuole'];
const SPECIALISED = ['redBlood', 'neurone', 'sperm', 'egg', 'root', 'palisade'];

export function CellsPage() {
  const { t } = useTranslation('biology');
  const structureItems = STRUCTURE_PARTS.map((k) => t(`cells.sections.structure.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const specialisedItems = SPECIALISED.map((k) => t(`cells.sections.specialised.detailed.${k}`, { returnObjects: true }) as DetailedItem);

  return (
    <BiologyTopicLayout topicKey="cells" icon={<Microscope size={28} />}>
      <InfoSection
        title={t('cells.sections.structure.title')}
        detailedItems={structureItems}
        borderColor="var(--color-accent-sage)"
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
        detailedItems={specialisedItems}
        borderColor="var(--color-accent-clay)"
      />
      <KeyValueSection
        title={t('cells.sections.transport.title')}
        pairs={[
          { label: 'Diffusion', body: t('cells.sections.transport.diffusion') },
          { label: 'Osmosis', body: t('cells.sections.transport.osmosis') },
          { label: 'Active transport', body: t('cells.sections.transport.activeTransport') },
        ]}
      />
      <SectionHeading>Interactive — Cell Diagram</SectionHeading>
      <CellDiagram />
    </BiologyTopicLayout>
  );
}
