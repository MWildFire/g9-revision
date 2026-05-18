import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function GeographyExtrasPage() {
  const { t } = useTranslation('geography');
  return (
    <ExtrasLayout title={t('extrasContent.title')} intro={t('extrasContent.intro')}>
      <ExtraSection title={t('extrasContent.tectonics.title')} body={t('extrasContent.tectonics.body')} borderColor="var(--color-accent-clay)" />
      <ExtraSection title={t('extrasContent.urbanisation.title')} body={t('extrasContent.urbanisation.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection title={t('extrasContent.globalisation.title')} items={(t('extrasContent.globalisation.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extrasContent.sustainable.title')} body={t('extrasContent.sustainable.body')} borderColor="var(--color-accent-sage)" />
      <ExtraSection title={t('extrasContent.biomes.title')} items={(t('extrasContent.biomes.items', { returnObjects: true }) as string[]) ?? []} />
    </ExtrasLayout>
  );
}
