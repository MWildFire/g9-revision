import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';
import { USEFUL_PHRASES } from '../data/arabicData';

export function PhrasesPage() {
  const { t, i18n } = useTranslation('arabic');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const arFont = '"Noto Sans Arabic", "Amiri", serif';

  const grouped = USEFUL_PHRASES.reduce<Record<string, typeof USEFUL_PHRASES>>((acc, p) => {
    if (!acc[p.context]) acc[p.context] = [];
    acc[p.context].push(p);
    return acc;
  }, {});

  return (
    <div>
      <TopicHero
        title={t('nav.phrases')}
        intro={lang === 'ru' ? 'Полезные фразы с транслитерацией.' : 'Useful phrases with transliteration.'}
        icon={<MessageCircle size={28} />}
      />
      <div className="mt-8 space-y-4">
        {Object.entries(grouped).map(([context, phrases]) => (
          <section key={context} className="bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-sky)', borderLeftWidth: '3px' }}>
            <h3 className="text-xs uppercase tracking-wider text-text-muted mb-3">{context}</h3>
            <div className="space-y-2">
              {phrases.map((p, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-3 text-sm">
                  <span className="text-lg sm:min-w-[150px] sm:text-right" style={{ fontFamily: arFont }} dir="rtl">{p.ar}</span>
                  <div>
                    <span className="font-mono text-xs text-text-secondary">{p.translit}</span>
                    <span className="text-text-muted"> — {lang === 'ru' ? p.ru : p.en}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
