import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function BiologyExtrasPage() {
  const { t } = useTranslation('biology');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.photoDepth.title')} body={t('extras.photoDepth.body')} borderColor="var(--color-accent-sage)" />
      <ExtraSection title={t('extras.hormones.title')} items={(t('extras.hormones.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.genetics.title')} body={t('extras.genetics.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection title={t('extras.biotech.title')} items={(t('extras.biotech.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.homeostasis.title')} body={t('extras.homeostasis.body')} borderColor="var(--color-accent-clay)" />
    </ExtrasLayout>
  );
}
