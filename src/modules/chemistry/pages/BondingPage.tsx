import { Link as LinkIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChemistryTopicLayout, ChemSection } from '../components/ChemistryTopicLayout';

const COMPARISON_KEYS = ['ionic', 'simpleCovalent', 'giantCovalent', 'metallic'];

export function BondingPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ChemistryTopicLayout topicKey="bonding" icon={<LinkIcon size={28} />}>
      <ChemSection
        title={t('bonding.sections.ionic.title')}
        body={t('bonding.sections.ionic.body')}
        borderColor="var(--color-accent-warm)"
      />
      <ChemSection
        title={t('bonding.sections.covalent.title')}
        body={t('bonding.sections.covalent.body')}
        borderColor="var(--color-accent-sage)"
      />
      <ChemSection
        title={t('bonding.sections.metallic.title')}
        body={t('bonding.sections.metallic.body')}
        borderColor="var(--color-accent-sky-deep)"
      />
      <ChemSection
        title={t('bonding.sections.comparison.title')}
        items={COMPARISON_KEYS.map((k) => ({ key: k, text: t(`bonding.sections.comparison.items.${k}`) }))}
      />
    </ChemistryTopicLayout>
  );
}
