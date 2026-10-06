import type { DefinitionReview } from '../../../components/content/definitionReview';
import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function BiologyExtrasPage() {
  const { t } = useTranslation('biology');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.photoDepth.title')} body={t('extras.photoDepth.body')} review={t('extras.photoDepth.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-sage)" />
      <ExtraSection title={t('extras.hormones.title')} review={t('extras.hormones.review', { returnObjects: true }) as DefinitionReview} items={(t('extras.hormones.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.genetics.title')} body={t('extras.genetics.body')} review={t('extras.genetics.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-warm)" />
      <ExtraSection title={t('extras.biotech.title')} review={t('extras.biotech.review', { returnObjects: true }) as DefinitionReview} items={(t('extras.biotech.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.homeostasis.title')} body={t('extras.homeostasis.body')} review={t('extras.homeostasis.review', { returnObjects: true }) as DefinitionReview} borderColor="var(--color-accent-clay)" />
    </ExtrasLayout>
  );
}
