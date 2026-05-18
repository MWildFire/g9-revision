import { Type } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { GRAMMAR_RULES } from '../data/frenchData';

export function GrammarPage() {
  const { t, i18n } = useTranslation('french');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <div>
      <TopicHero
        title={t('nav.grammar')}
        intro={lang === 'ru' ? 'Шесть ключевых правил французской грамматики.' : 'Six core French grammar rules.'}
        icon={<Type size={28} />}
      />
      {GRAMMAR_RULES.map((rule) => (
        <div key={rule.id}>
          <SectionHeading>{lang === 'ru' ? rule.titleRu : rule.titleEn}</SectionHeading>
          <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderLeftColor: 'var(--color-accent-sage)', borderLeftWidth: '3px' }}>
            {lang === 'ru' ? rule.bodyRu : rule.body}
          </p>
        </div>
      ))}
    </div>
  );
}
