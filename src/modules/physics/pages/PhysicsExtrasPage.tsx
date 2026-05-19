import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const THERMO_LAWS = ['zeroth', 'first', 'second', 'third'];

export function PhysicsExtrasPage() {
  const { t } = useTranslation('physics');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.relativity.title')} body={t('extras.relativity.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection title={t('extras.quantum.title')} body={t('extras.quantum.body')} borderColor="var(--color-accent-sky-deep)" />
      <ExtraSection
        title={t('extras.thermo.title')}
        detailedItems={THERMO_LAWS.map((k) => t(`extras.thermo.detailed.${k}`, { returnObjects: true }) as DetailedItem)}
        borderColor="var(--color-accent-clay)"
      />
      <ExtraSection title={t('extras.astro.title')} body={t('extras.astro.body')} borderColor="var(--color-accent-clay)" />
      <ExtraSection title={t('extras.renewable.title')} body={t('extras.renewable.body')} borderColor="var(--color-accent-sage)" />
    </ExtrasLayout>
  );
}
