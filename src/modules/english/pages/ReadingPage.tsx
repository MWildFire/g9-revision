import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const STRATEGIES = ['skim', 'scan', 'annotate', 'infer'];
const QUESTIONS = ['literal', 'inferential', 'language', 'evaluation'];
const PEEL_STEPS = ['p', 'e1', 'e2', 'l'];

export function ReadingPage() {
  const { t, i18n } = useTranslation('english');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;

  return (
    <div>
      <TopicHero title={t('readingPage.title')} intro={t('readingPage.intro')} icon={<Search size={28} />} />

      <SectionHeading>{t('reading.strategies.title')}</SectionHeading>
      <div className="space-y-3">
        {STRATEGIES.map((id) => {
          const item = t(`reading.strategies.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-sky)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('reading.questionTypes.title')}</SectionHeading>
      <div className="space-y-3">
        {QUESTIONS.map((id) => {
          const item = t(`reading.questionTypes.detailed.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-warm)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('reading.PEEL.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm mb-3" style={{ borderLeftColor: 'var(--color-accent-sky-deep)', borderLeftWidth: '3px' }}>
        {t('reading.PEEL.body')}
      </p>
      <div className="space-y-2 mb-3">
        {PEEL_STEPS.map((step) => (
          <div key={step} className="bg-bg-secondary border border-border rounded-md p-3 text-sm">
            {t(`reading.PEEL.steps.${step}`)}
          </div>
        ))}
      </div>
      <p className="text-xs bg-bg-tertiary/40 border border-border rounded-md px-3 py-2">
        <span className="uppercase tracking-wider text-text-muted mr-2">💡 Tip</span>
        {t('reading.PEEL.tip')}
      </p>
    </div>
  );
}
