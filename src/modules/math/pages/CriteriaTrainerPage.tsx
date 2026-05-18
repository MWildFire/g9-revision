import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { MathPracticeList } from '../../../components/content/MathPracticeList';
import { ALL_MATH_PROBLEMS } from '../data/practiceProblems';
import type { Criterion } from '../data/practiceProblems';

const CRITERIA: { id: Criterion; key: string; accent: string }[] = [
  { id: 'A', key: 'criterionA', accent: 'var(--color-accent-sky)' },
  { id: 'B', key: 'criterionB', accent: 'var(--color-accent-sage)' },
  { id: 'C', key: 'criterionC', accent: 'var(--color-accent-warm)' },
  { id: 'D', key: 'criterionD', accent: 'var(--color-accent-clay)' },
];

const CRITERION_C_CHECKLIST = [
  'Show all working steps clearly',
  'Use correct mathematical notation (=, →, ∴, ∈, ≤, ≥)',
  'Include units in every answer (cm, m², seconds, etc.)',
  'Round consistently and state the level of accuracy',
  'Write a concluding sentence answering the question',
  'Justify any assumptions you made',
];

export function CriteriaTrainerPage() {
  const { t } = useTranslation('math');
  const [active, setActive] = useState<Criterion>('A');

  const filteredProblems = ALL_MATH_PROBLEMS.filter((p) => p.criterion === active);

  return (
    <div>
      <TopicHero title={t('criteriaTrainer.title')} intro={t('criteriaTrainer.intro')} icon={<ClipboardCheck size={28} />} />

      <div className="flex flex-wrap gap-2 mt-8">
        {CRITERIA.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                isActive ? 'bg-bg-secondary shadow-soft' : 'hover:bg-bg-secondary/50'
              }`}
              style={{
                borderColor: isActive ? c.accent : 'var(--color-border)',
                color: isActive ? c.accent : 'var(--color-text-secondary)',
              }}
            >
              Criterion {c.id}
            </button>
          );
        })}
      </div>

      <div className="mt-6 bg-bg-secondary border border-border rounded-md p-5">
        <h3 className="font-serif text-lg font-medium mb-1">
          {t(`criteriaTrainer.${CRITERIA.find((c) => c.id === active)!.key}.title`)}
        </h3>
        <p className="text-sm text-text-secondary">
          {t(`criteriaTrainer.${CRITERIA.find((c) => c.id === active)!.key}.description`)}
        </p>
      </div>

      {active === 'C' ? (
        <>
          <SectionHeading>Communication checklist</SectionHeading>
          <ul className="space-y-2">
            {CRITERION_C_CHECKLIST.map((item, i) => (
              <li key={i} className="flex items-start gap-2 bg-bg-secondary border border-border rounded-md px-4 py-2.5 text-sm">
                <span className="text-text-muted shrink-0">☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <SectionHeading>Practice problems</SectionHeading>
          {filteredProblems.length > 0 ? (
            <MathPracticeList problems={filteredProblems} />
          ) : (
            <p className="text-sm text-text-muted">
              No problems tagged with Criterion {active} yet.
            </p>
          )}
        </>
      )}
    </div>
  );
}
