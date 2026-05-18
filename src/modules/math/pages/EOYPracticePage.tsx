import { useTranslation } from 'react-i18next';
import { ExternalLink, Layers } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { MathPracticeList } from '../../../components/content/MathPracticeList';
import { getRICProblems } from '../data/practiceProblems';

export function EOYPracticePage() {
  const { t } = useTranslation('math');
  const problems = getRICProblems();

  return (
    <div>
      <TopicHero title={t('eoyPractice.title')} intro={t('eoyPractice.intro')} icon={<Layers size={28} />} />

      <SectionHeading>AssessPrep</SectionHeading>
      <div className="bg-bg-secondary border border-border rounded-md p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { code: 'Y9636Y', name: 'EOY 1' },
          { code: 'GD29PC', name: 'EOY 2' },
        ].map((p) => (
          <a
            key={p.code}
            href="https://app.assessprep.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-bg-primary border border-border rounded-md p-3 hover:shadow-soft transition-shadow"
          >
            <div>
              <p className="text-xs text-text-muted">{p.name}</p>
              <p className="font-mono font-medium">{p.code}</p>
            </div>
            <ExternalLink size={14} className="text-text-muted" />
          </a>
        ))}
      </div>

      <SectionHeading>{t('sources.reviewInContext')}</SectionHeading>
      <p className="text-sm text-text-secondary mb-4">
        Review-in-Context questions from the textbooks — IB MYP style, suitable for EOY revision.
      </p>
      <MathPracticeList problems={problems} />
    </div>
  );
}
