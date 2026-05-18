import { PenTool } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const TENSES = ['present', 'presentCont', 'past', 'pastCont', 'presentPerfect', 'future'];
const PUNCT = ['comma', 'semicolon', 'colon', 'apostrophe', 'dash'];
const ERRORS = ['yourYoure', 'itsIts', 'thereTheirTheyre', 'lessFewer', 'affectEffect', 'thanThen'];

export function GrammarPage() {
  const { t, i18n } = useTranslation('english');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;

  const agreementRules = (t('grammar.agreement.rules', { returnObjects: true }) as string[]) ?? [];

  return (
    <div>
      <TopicHero title={t('grammarPage.title')} intro={t('grammarPage.intro')} icon={<PenTool size={28} />} />

      <SectionHeading>{t('grammar.tenses.title')}</SectionHeading>
      <div className="space-y-3">
        {TENSES.map((id) => {
          const item = t(`grammar.tenses.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-warm)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('grammar.punctuation.title')}</SectionHeading>
      <div className="space-y-3">
        {PUNCT.map((id) => {
          const item = t(`grammar.punctuation.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-sky-deep)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('grammar.agreement.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm mb-3" style={{ borderLeftColor: 'var(--color-accent-sage)', borderLeftWidth: '3px' }}>
        {t('grammar.agreement.body')}
      </p>
      <ul className="space-y-2">
        {agreementRules.map((rule, i) => (
          <li key={i} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">{rule}</li>
        ))}
      </ul>

      <SectionHeading>{t('grammar.commonErrors.title')}</SectionHeading>
      <div className="space-y-3">
        {ERRORS.map((id) => {
          const item = t(`grammar.commonErrors.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-clay)" labels={labels} />;
        })}
      </div>
    </div>
  );
}
