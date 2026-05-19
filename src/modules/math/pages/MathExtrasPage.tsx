import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';
import { DetailedItem } from '../../../components/content/DetailedCard';

const PROOF_TYPES = ['direct', 'contradiction', 'induction', 'counterexample'];

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
        detailedItems={PROOF_TYPES.map((k) => t(`extras.proofs.detailed.${k}`, { returnObjects: true }) as DetailedItem)}
        borderColor="var(--color-accent-clay)"
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
