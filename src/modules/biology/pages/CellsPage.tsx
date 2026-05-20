import { Microscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection, KeyValueSection } from '../components/BiologyTopicLayout';
import { CellDiagram } from '../../../components/simulations/biology/CellDiagram';
import { SectionHeading } from '../../../components/content/TopicHero';
import { DetailedItem } from '../../../components/content/DetailedCard';

const MICROSCOPES = ['light', 'electron', 'preparation', 'drawing'];
const EUK_PROK = ['eukaryotic', 'prokaryotic', 'comparison'];
const STRUCTURE_PARTS = ['nucleus', 'cytoplasm', 'membrane', 'mitochondria', 'ribosome', 'wall', 'chloroplast', 'vacuole'];
const SPECIALISED = ['redBlood', 'neurone', 'sperm', 'egg', 'root', 'palisade'];
const TRANSPORT = ['diffusion', 'osmosis', 'activeTransport', 'significance'];

export function CellsPage() {
  const { t } = useTranslation('biology');
  const microscopeItems = MICROSCOPES.map((k) => t(`cells.sections.microscopes.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const eukProkItems = EUK_PROK.map((k) => t(`cells.sections.eukaryoticProkaryotic.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const structureItems = STRUCTURE_PARTS.map((k) => t(`cells.sections.structure.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const specialisedItems = SPECIALISED.map((k) => t(`cells.sections.specialised.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const transportItems = TRANSPORT.map((k) => t(`cells.sections.transport.detailed.${k}`, { returnObjects: true }) as DetailedItem);

  return (
    <BiologyTopicLayout topicKey="cells" icon={<Microscope size={28} />}>
      <InfoSection
        title={t('cells.sections.microscopes.title')}
        detailedItems={microscopeItems}
        borderColor="var(--color-accent-sky-deep)"
      />
      <InfoSection
        title={t('cells.sections.eukaryoticProkaryotic.title')}
        detailedItems={eukProkItems}
        borderColor="var(--color-accent-warm)"
      />
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
      <InfoSection
        title={t('cells.sections.transport.title')}
        detailedItems={transportItems}
        borderColor="var(--color-accent-sky)"
      />
      <SectionHeading>Interactive — Cell Diagram</SectionHeading>
      <CellDiagram />
    </BiologyTopicLayout>
  );
}
