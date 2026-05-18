import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function MathExtrasPage() {
  const { t } = useTranslation('math');

  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection
        title={t('extras.calculus.title')}
        body={t('extras.calculus.body')}
        borderColor="var(--color-accent-sky-deep)"
      />
      <ExtraSection
        title={t('extras.proofs.title')}
        items={(t('extras.proofs.items', { returnObjects: true }) as string[]) ?? []}
      />
      <ExtraSection
        title={t('extras.numberTheory.title')}
        body={t('extras.numberTheory.body')}
        borderColor="var(--color-accent-warm)"
      />
      <ExtraSection
        title={t('extras.complex.title')}
        body={t('extras.complex.body')}
        borderColor="var(--color-accent-clay)"
      />
      <ExtraSection
        title={t('extras.statsExt.title')}
        body={t('extras.statsExt.body')}
        borderColor="var(--color-accent-sage)"
      />
    </ExtrasLayout>
  );
}
