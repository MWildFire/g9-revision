import { useTranslation } from 'react-i18next';
import { Layers } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { MathPracticeList } from '../../../components/content/MathPracticeList';
import { getRICProblems } from '../data/practiceProblems';

export function EOYPracticePage() {
  const { t } = useTranslation('math');
  const problems = getRICProblems();

  return (
    <div>
      <TopicHero title={t('eoyPractice.title')} intro={t('eoyPractice.intro')} icon={<Layers size={28} />} />

      <SectionHeading>{t('sources.reviewInContext')}</SectionHeading>
      <p className="text-sm text-text-secondary mb-4">
        {t('eoyPractice.intro')}
      </p>
      <MathPracticeList problems={problems} />
    </div>
  );
}
