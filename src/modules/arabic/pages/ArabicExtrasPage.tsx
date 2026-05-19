import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const DIALECTS = ['msa', 'egyptian', 'levantine', 'gulf', 'maghrebi'];
const LITERATURE = ['nights', 'darwish', 'mahfouz', 'qabbani', 'gibran'];

export function ArabicExtrasPage() {
  const { t } = useTranslation('arabic');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.numerals.title')} body={t('extras.numerals.body')} borderColor="var(--color-accent-olive)" />
      <ExtraSection title={t('extras.verbForms.title')} body={t('extras.verbForms.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection
        title={t('extras.dialects.title')}
        detailedItems={DIALECTS.map((k) => t(`extras.dialects.detailed.${k}`, { returnObjects: true }) as DetailedItem)}
        borderColor="var(--color-accent-sage)"
      />
      <ExtraSection title={t('extras.culture.title')} body={t('extras.culture.body')} borderColor="var(--color-accent-clay)" />
      <ExtraSection
        title={t('extras.literature.title')}
        detailedItems={LITERATURE.map((k) => t(`extras.literature.detailed.${k}`, { returnObjects: true }) as DetailedItem)}
        borderColor="var(--color-accent-sky-deep)"
      />
    </ExtrasLayout>
  );
}
