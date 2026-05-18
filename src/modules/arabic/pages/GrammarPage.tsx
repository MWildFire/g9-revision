import { ScrollText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { GRAMMAR_RULES } from '../data/arabicData';

export function GrammarPage() {
  const { t, i18n } = useTranslation('arabic');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : { examples: 'Examples', tip: 'Tip', watchOut: 'Watch out' };

  return (
    <div>
      <TopicHero
        title={t('nav.grammar')}
        intro={lang === 'ru' ? 'Шесть основных правил арабской грамматики — с подробными объяснениями и примерами.' : 'Six core Arabic grammar rules — with detailed explanations and examples.'}
        icon={<ScrollText size={28} />}
      />
      {GRAMMAR_RULES.map((rule) => {
        const detail = lang === 'ru' ? rule.detailsRu : rule.detailsEn;
        const summary = lang === 'ru' ? rule.bodyRu : rule.body;
        return (
          <div key={rule.id}>
            <SectionHeading>{lang === 'ru' ? rule.titleRu : rule.titleEn}</SectionHeading>
            <div className="bg-bg-secondary border border-border rounded-md p-4 space-y-3" style={{ borderLeftColor: 'var(--color-accent-olive)', borderLeftWidth: '3px' }}>
              <p className="text-sm text-text-secondary leading-relaxed">{detail?.body ?? summary}</p>
              {detail?.examples && detail.examples.length > 0 ? (
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted mb-1.5">{labels.examples}</p>
                  <ul className="space-y-1.5">
                    {detail.examples.map((ex, idx) => (
                      <li key={idx} className="text-sm text-text-secondary pl-3 border-l-2 border-border" lang="ar">{ex}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {detail?.tip ? (
                <p className="text-xs text-text-secondary bg-bg-tertiary/40 border border-border rounded-md px-3 py-2">
                  <span className="uppercase tracking-wider text-text-muted mr-2">💡 {labels.tip}</span>
                  {detail.tip}
                </p>
              ) : null}
              {detail?.watchOut ? (
                <p className="text-xs text-text-secondary bg-accent-clay/10 border border-accent-clay/30 rounded-md px-3 py-2">
                  <span className="uppercase tracking-wider text-accent-clay mr-2">⚠ {labels.watchOut}</span>
                  {detail.watchOut}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
