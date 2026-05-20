import { Dna } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection } from '../components/BiologyTopicLayout';
import { PunnettSquare } from '../../../components/simulations/biology/PunnettSquare';
import { SectionHeading } from '../../../components/content/TopicHero';
import { DetailedItem } from '../../../components/content/DetailedCard';

const BASIC_SECTIONS = ['dna', 'mitosis', 'meiosis', 'inheritance'];
const VARIATION_KEYS = ['sources', 'continuous'];
const EVOLUTION_KEYS = ['naturalSelection', 'speciation', 'evidence', 'humanEvolution'];

export function GeneticsPage() {
  const { t } = useTranslation('biology');
  const variationItems = VARIATION_KEYS.map((k) => t(`genetics.sections.variation.detailed.${k}`, { returnObjects: true }) as DetailedItem);
  const evolutionItems = EVOLUTION_KEYS.map((k) => t(`genetics.sections.evolution.detailed.${k}`, { returnObjects: true }) as DetailedItem);

  return (
    <BiologyTopicLayout topicKey="genetics" icon={<Dna size={28} />}>
      {BASIC_SECTIONS.map((s) => (
        <InfoSection
          key={s}
          title={t(`genetics.sections.${s}.title`)}
          body={t(`genetics.sections.${s}.body`)}
          borderColor="var(--color-accent-warm)"
        />
      ))}
      <InfoSection
        title={t('genetics.sections.variation.title')}
        detailedItems={variationItems}
        borderColor="var(--color-accent-sage)"
      />
      <InfoSection
        title={t('genetics.sections.evolution.title')}
        detailedItems={evolutionItems}
        borderColor="var(--color-accent-clay)"
      />
      <SectionHeading>Interactive — Punnett Square</SectionHeading>
      <PunnettSquare />
    </BiologyTopicLayout>
  );
}
