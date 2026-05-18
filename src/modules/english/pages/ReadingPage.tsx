import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';

const STRATEGIES = ['skim', 'scan', 'annotate', 'infer'];
const QUESTIONS = ['literal', 'inferential', 'language', 'evaluation'];

export function ReadingPage() {
  const { t } = useTranslation('english');
  return (
    <div>
      <TopicHero title={t('readingPage.title')} intro={t('readingPage.intro')} icon={<Search size={28} />} />

      <SectionHeading>{t('reading.strategies.title')}</SectionHeading>
      <ul className="space-y-2">
        {STRATEGIES.map((id) => (
          <li key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
            {t(`reading.strategies.items.${id}`)}
          </li>
        ))}
      </ul>

      <SectionHeading>{t('reading.questionTypes.title')}</SectionHeading>
      <ul className="space-y-2">
        {QUESTIONS.map((id) => (
          <li key={id} className="bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
            {t(`reading.questionTypes.items.${id}`)}
          </li>
        ))}
      </ul>

      <SectionHeading>{t('reading.PEEL.title')}</SectionHeading>
      <p className="bg-bg-secondary border border-border rounded-md p-4 text-sm" style={{ borderLeftColor: 'var(--color-accent-sky)', borderLeftWidth: '3px' }}>
        {t('reading.PEEL.body')}
      </p>
    </div>
  );
}
