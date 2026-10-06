import type { DefinitionReview } from '../../../components/content/definitionReview';
import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function ChemistryExtrasPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.organic.title')} body={t('extras.organic.body')} review={t('extras.organic.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-sage)" />
      <ExtraSection title={t('extras.redox.title')} body={t('extras.redox.body')} review={t('extras.redox.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-warm)" />
      <ExtraSection title={t('extras.electrochem.title')} body={t('extras.electrochem.body')} review={t('extras.electrochem.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-sky-deep)" />
      <ExtraSection title={t('extras.rates.title')} review={t('extras.rates.review', { returnObjects: true }) as DefinitionReview} items={(t('extras.rates.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.equilibrium.title')} body={t('extras.equilibrium.body')} review={t('extras.equilibrium.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-clay)" />
    </ExtrasLayout>
  );
}
