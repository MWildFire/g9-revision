import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function ArabicExtrasPage() {
  const { t } = useTranslation('arabic');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.numerals.title')} body={t('extras.numerals.body')} borderColor="var(--color-accent-olive)" />
      <ExtraSection title={t('extras.verbForms.title')} body={t('extras.verbForms.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection title={t('extras.dialects.title')} items={(t('extras.dialects.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.culture.title')} body={t('extras.culture.body')} borderColor="var(--color-accent-clay)" />
      <ExtraSection title={t('extras.literature.title')} items={(t('extras.literature.items', { returnObjects: true }) as string[]) ?? []} />
    </ExtrasLayout>
  );
}
