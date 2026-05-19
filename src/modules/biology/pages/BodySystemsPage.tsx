import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection } from '../components/BiologyTopicLayout';
import { HeartDiagram } from '../../../components/simulations/biology/HeartDiagram';
import { SectionHeading } from '../../../components/content/TopicHero';
import { DetailedItem } from '../../../components/content/DetailedCard';

const SYSTEMS: { key: string; subKeys: string[] }[] = [
  { key: 'circulatory', subKeys: ['heart', 'vessels', 'blood'] },
  { key: 'respiratory', subKeys: ['pathway', 'alveoli', 'breathing'] },
  { key: 'digestive', subKeys: ['pathway', 'enzymes', 'absorption'] },
  { key: 'nervous', subKeys: ['structure', 'neurone', 'reflex'] },
  { key: 'endocrine', subKeys: ['comparison', 'hormones', 'diabetes'] },
];

export function BodySystemsPage() {
  const { t } = useTranslation('biology');
  return (
    <BiologyTopicLayout topicKey="bodySystems" icon={<Heart size={28} />}>
      {SYSTEMS.map(({ key, subKeys }) => {
        const detailedItems = subKeys.map((sk) => t(`bodySystems.sections.${key}.detailed.${sk}`, { returnObjects: true }) as DetailedItem);
        return (
          <InfoSection
            key={key}
            title={t(`bodySystems.sections.${key}.title`)}
            detailedItems={detailedItems}
            borderColor="var(--color-accent-clay)"
          />
        );
      })}
      <SectionHeading>Interactive — Heart Diagram</SectionHeading>
      <HeartDiagram />
    </BiologyTopicLayout>
  );
}
