import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero } from '../../../components/content/TopicHero';
import { USEFUL_PHRASES } from '../data/frenchData';

export function PhrasesPage() {
  const { t, i18n } = useTranslation('french');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  // Group by context
  const grouped = USEFUL_PHRASES.reduce<Record<string, typeof USEFUL_PHRASES>>((acc, p) => {
    if (!acc[p.context]) acc[p.context] = [];
    acc[p.context].push(p);
    return acc;
  }, {});

  return (
    <div>
      <TopicHero
        title={t('nav.phrases')}
        intro={lang === 'ru' ? 'Полезные фразы по контекстам.' : 'Useful phrases grouped by context.'}
        icon={<MessageCircle size={28} />}
      />
      <div className="mt-8 space-y-4">
        {Object.entries(grouped).map(([context, phrases]) => (
          <section key={context} className="bg-bg-secondary border border-border rounded-md p-4" style={{ borderLeftColor: 'var(--color-accent-sky)', borderLeftWidth: '3px' }}>
            <h3 className="text-xs uppercase tracking-wider text-text-muted mb-2">{context}</h3>
            <div className="space-y-2">
              {phrases.map((p, i) => (
                <div key={i} className="text-sm">
                  <span className="font-medium">{p.fr}</span>
                  <span className="text-text-muted"> — {lang === 'ru' ? p.ru : p.en}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
