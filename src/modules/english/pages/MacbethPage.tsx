import { useTranslation } from 'react-i18next';
import { ScrollText, AlertCircle } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const ACTS = ['act1', 'act2', 'act3', 'act4', 'act5'];

export function MacbethPage() {
  const { t } = useTranslation('english');
  const themes = (t('macbethPage.themes.items', { returnObjects: true }) as string[]) ?? [];
  const quotes = (t('macbethPage.keyQuotes.items', { returnObjects: true }) as string[]) ?? [];

  return (
    <div>
      <TopicHero title={t('macbethPage.title')} intro={t('macbethPage.intro')} icon={<ScrollText size={28} />} />

      <div className="mt-6 flex items-start gap-3 bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-clay)', borderLeftWidth: '4px' }}>
        <AlertCircle size={18} className="text-accent-clay shrink-0 mt-0.5" />
        <p className="text-sm">{t('macbethPage.notice')}</p>
      </div>

      <SectionHeading>{t('macbethPage.themes.title')}</SectionHeading>
      <ul className="space-y-2">
        {themes.map((item, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{item}</li>
        ))}
      </ul>

      {ACTS.map((actKey) => {
        const scenes = (t(`macbethPage.${actKey}.scenes`, { returnObjects: true }) as string[]) ?? [];
        return (
          <div key={actKey}>
            <SectionHeading>{t(`macbethPage.${actKey}.title`)}</SectionHeading>
            <div className="space-y-2">
              {scenes.map((s, i) => (
                <div key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm" style={{ borderLeftColor: 'var(--color-accent-sand)', borderLeftWidth: '3px' }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <SectionHeading>{t('macbethPage.keyQuotes.title')}</SectionHeading>
      <ul className="space-y-2">
        {quotes.map((q, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm font-serif italic">{q}</li>
        ))}
      </ul>
    </div>
  );
}
