import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function FrenchExtrasPage() {
  const { t } = useTranslation('french');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.subjunctive.title')} body={t('extras.subjunctive.body')} borderColor="var(--color-accent-rose-muted)" />
      <ExtraSection title={t('extras.idioms.title')} items={(t('extras.idioms.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.culture.title')} body={t('extras.culture.body')} borderColor="var(--color-accent-warm)" />
      <ExtraSection title={t('extras.literature.title')} items={(t('extras.literature.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.filmMusic.title')} body={t('extras.filmMusic.body')} borderColor="var(--color-accent-clay)" />
    </ExtrasLayout>
  );
}
