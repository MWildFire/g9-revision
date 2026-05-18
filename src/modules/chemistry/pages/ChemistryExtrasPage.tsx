import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function ChemistryExtrasPage() {
  const { t } = useTranslation('chemistry');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.organic.title')} body={t('extras.organic.body')} borderColor="var(--color-accent-sage)" />
      <ExtraSection title={t('extras.redox.title')} body={t('extras.redox.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection title={t('extras.electrochem.title')} body={t('extras.electrochem.body')} borderColor="var(--color-accent-sky-deep)" />
      <ExtraSection title={t('extras.rates.title')} items={(t('extras.rates.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.equilibrium.title')} body={t('extras.equilibrium.body')} borderColor="var(--color-accent-clay)" />
    </ExtrasLayout>
  );
}
