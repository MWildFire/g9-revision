import { Dna } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BiologyTopicLayout, InfoSection } from '../components/BiologyTopicLayout';

const SECTIONS = ['dna', 'mitosis', 'meiosis', 'inheritance', 'variation', 'evolution'];

export function GeneticsPage() {
  const { t } = useTranslation('biology');
  return (
    <BiologyTopicLayout topicKey="genetics" icon={<Dna size={28} />}>
      {SECTIONS.map((s) => (
        <InfoSection
          key={s}
          title={t(`genetics.sections.${s}.title`)}
          body={t(`genetics.sections.${s}.body`)}
          borderColor="var(--color-accent-warm)"
        />
      ))}
    </BiologyTopicLayout>
  );
}
