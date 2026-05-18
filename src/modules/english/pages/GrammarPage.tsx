import { PenTool } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const TENSES = ['present', 'presentCont', 'past', 'pastCont', 'presentPerfect', 'future'];
const PUNCT = ['comma', 'semicolon', 'colon', 'apostrophe', 'dash'];
const ERRORS = ['yourYoure', 'itsIts', 'thereTheirTheyre', 'lessFewer', 'affectEffect'];

export function GrammarPage() {
  const { t } = useTranslation('english');
  return (
    <div>
      <TopicHero title={t('grammarPage.title')} intro={t('grammarPage.intro')} icon={<PenTool size={28} />} />

      <SectionHeading>{t('grammar.tenses.title')}</SectionHeading>
      <ul className="space-y-2">
        {TENSES.map((id) => (
          <li key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
            {t(`grammar.tenses.items.${id}`)}
          </li>
        ))}
      </ul>

      <SectionHeading>{t('grammar.punctuation.title')}</SectionHeading>
      <ul className="space-y-2">
        {PUNCT.map((id) => (
          <li key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
            {t(`grammar.punctuation.items.${id}`)}
          </li>
        ))}
      </ul>

      <SectionHeading>{t('grammar.agreement.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderLeftColor: 'var(--color-accent-sage)', borderLeftWidth: '3px' }}>
        {t('grammar.agreement.body')}
      </p>

      <SectionHeading>{t('grammar.commonErrors.title')}</SectionHeading>
      <ul className="space-y-2">
        {ERRORS.map((id) => (
          <li key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
            {t(`grammar.commonErrors.items.${id}`)}
          </li>
        ))}
      </ul>
    </div>
  );
}
