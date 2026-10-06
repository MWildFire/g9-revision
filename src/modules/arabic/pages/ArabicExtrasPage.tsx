import { ARABIC_REVIEWS } from '../../../definitions/arabic';
import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const DIALECTS = ['msa', 'egyptian', 'levantine', 'gulf', 'maghrebi'];
const LITERATURE = ['nights', 'darwish', 'mahfouz', 'qabbani', 'gibran'];

export function ArabicExtrasPage() {
  const { t } = useTranslation('arabic');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection review={ARABIC_REVIEWS.numerals} title={t('extras.numerals.title')} body={t('extras.numerals.body')} borderColor="var(--color-accent-olive)" />
      <ExtraSection review={ARABIC_REVIEWS.verbForms} title={t('extras.verbForms.title')} body={t('extras.verbForms.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection
        title={t('extras.dialects.title')}
        detailedItems={DIALECTS.map((k) => ({ ...t(`extras.dialects.detailed.${k}`, { returnObjects: true }) as DetailedItem, review: ARABIC_REVIEWS[`dialects.${k}`] }))}
        borderColor="var(--color-accent-sage)"
      />
      <ExtraSection review={ARABIC_REVIEWS.culture} title={t('extras.culture.title')} body={t('extras.culture.body')} borderColor="var(--color-accent-clay)" />
      <ExtraSection
        title={t('extras.literature.title')}
        detailedItems={LITERATURE.map((k) => ({ ...t(`extras.literature.detailed.${k}`, { returnObjects: true }) as DetailedItem, review: ARABIC_REVIEWS[`literature.${k}`] }))}
        borderColor="var(--color-accent-sky-deep)"
      />
    </ExtrasLayout>
  );
}
