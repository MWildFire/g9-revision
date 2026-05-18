import { useTranslation } from 'react-i18next';
import { Brain } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

export function ProgressTestPage() {
  const { t } = useTranslation('english');
  const moodWords = t('progressTestPage.moodWords.items', { returnObjects: true }) as Record<string, string>;
  const viewWords = t('progressTestPage.viewpointWords.items', { returnObjects: true }) as Record<string, string>;
  const synth = (t('progressTestPage.synthesis.items', { returnObjects: true }) as string[]) ?? [];
  const shades = (t('progressTestPage.shadesOfMeaning.items', { returnObjects: true }) as string[]) ?? [];
  const spag = (t('progressTestPage.spag.items', { returnObjects: true }) as string[]) ?? [];
  const spelling = (t('progressTestPage.spelling.items', { returnObjects: true }) as string[]) ?? [];
  const devices = (t('progressTestPage.devicesExamples.items', { returnObjects: true }) as string[]) ?? [];

  return (
    <div>
      <TopicHero title={t('progressTestPage.title')} intro={t('progressTestPage.intro')} icon={<Brain size={28} />} />

      <SectionHeading>{t('progressTestPage.survivalVocab.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderLeftColor: 'var(--color-accent-sky-deep)', borderLeftWidth: '3px' }}>
        {t('progressTestPage.survivalVocab.body')}
      </p>

      <SectionHeading>{t('progressTestPage.moodWords.title')}</SectionHeading>
      <ul className="space-y-2">
        {Object.entries(moodWords).map(([k, v]) => (
          <li key={k} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{v}</li>
        ))}
      </ul>

      <SectionHeading>{t('progressTestPage.viewpointWords.title')}</SectionHeading>
      <ul className="space-y-2">
        {Object.entries(viewWords).map(([k, v]) => (
          <li key={k} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{v}</li>
        ))}
      </ul>

      <SectionHeading>{t('progressTestPage.synthesis.title')}</SectionHeading>
      <ul className="space-y-2">
        {synth.map((s, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm italic">{s}</li>
        ))}
      </ul>

      <SectionHeading>{t('progressTestPage.shadesOfMeaning.title')}</SectionHeading>
      <ul className="space-y-2">
        {shades.map((s, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{s}</li>
        ))}
      </ul>

      <SectionHeading>{t('progressTestPage.spag.title')}</SectionHeading>
      <ul className="space-y-2">
        {spag.map((s, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{s}</li>
        ))}
      </ul>

      <SectionHeading>{t('progressTestPage.spelling.title')}</SectionHeading>
      <ul className="space-y-2">
        {spelling.map((s, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{s}</li>
        ))}
      </ul>

      <SectionHeading>{t('progressTestPage.devicesExamples.title')}</SectionHeading>
      <ul className="space-y-2">
        {devices.map((d, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{d}</li>
        ))}
      </ul>
    </div>
  );
}
