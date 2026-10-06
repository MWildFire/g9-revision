import { geographyReviews } from '../../../definitions/geographyReviews';
import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function GeographyExtrasPage() {
  const { t } = useTranslation('geography');
  return (
    <ExtrasLayout title={t('extrasContent.title')} intro={t('extrasContent.intro')}>
      <ExtraSection review={geographyReviews.tectonics} title={t('extrasContent.tectonics.title')} body={t('extrasContent.tectonics.body')} borderColor="var(--color-accent-clay)" />
      <ExtraSection review={geographyReviews.urbanisation} title={t('extrasContent.urbanisation.title')} body={t('extrasContent.urbanisation.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection review={geographyReviews.globalisation} title={t('extrasContent.globalisation.title')} items={(t('extrasContent.globalisation.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection review={geographyReviews.sustainable} title={t('extrasContent.sustainable.title')} body={t('extrasContent.sustainable.body')} borderColor="var(--color-accent-sage)" />
      <ExtraSection review={geographyReviews.biomes} title={t('extrasContent.biomes.title')} items={(t('extrasContent.biomes.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection review={geographyReviews.development} title={t('extrasContent.development.title')} body={t('extrasContent.development.body')} />
    </ExtrasLayout>
  );
}
