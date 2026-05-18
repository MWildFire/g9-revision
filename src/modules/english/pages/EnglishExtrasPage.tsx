import { useTranslation } from 'react-i18next';
import { ExtrasLayout, ExtraSection } from '../../../components/content/ExtrasLayout';

export function EnglishExtrasPage() {
  const { t } = useTranslation('english');
  return (
    <ExtrasLayout title={t('extras.title')} intro={t('extras.intro')}>
      <ExtraSection title={t('extras.criticalThinking.title')} items={(t('extras.criticalThinking.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.shakespeare.title')} body={t('extras.shakespeare.body')} borderColor="var(--color-accent-clay)" />
      <ExtraSection title={t('extras.vocab.title')} items={(t('extras.vocab.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.essayQuotes.title')} items={(t('extras.essayQuotes.items', { returnObjects: true }) as string[]) ?? []} />
      <ExtraSection title={t('extras.poetry.title')} body={t('extras.poetry.body')} borderColor="var(--color-accent-warm)" />
    </ExtrasLayout>
  );
}
