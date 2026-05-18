import { ScrollText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { GRAMMAR_RULES } from '../data/arabicData';

export function GrammarPage() {
  const { t, i18n } = useTranslation('arabic');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <div>
      <TopicHero
        title={t('nav.grammar')}
        intro={lang === 'ru' ? 'Шесть основных правил арабской грамматики.' : 'Six core Arabic grammar rules.'}
        icon={<ScrollText size={28} />}
      />
      {GRAMMAR_RULES.map((rule) => (
        <div key={rule.id}>
          <SectionHeading>{lang === 'ru' ? rule.titleRu : rule.titleEn}</SectionHeading>
          <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderLeftColor: 'var(--color-accent-olive)', borderLeftWidth: '3px' }}>
            {lang === 'ru' ? rule.bodyRu : rule.body}
          </p>
        </div>
      ))}
    </div>
  );
}
