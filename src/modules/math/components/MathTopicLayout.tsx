import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { DrFrostLink } from '../../../components/content/DrFrostLink';
import { MathPracticeList } from '../../../components/content/MathPracticeList';
import type { MathTopicId } from '../data/drFrostTasks';
import { getDrFrostTasksForTopic } from '../data/drFrostTasks';
import { getTextbookRef } from '../data/textbookRefs';
import { getProblemsForTopic } from '../data/practiceProblems';
import { BookMarked } from 'lucide-react';

interface Props {
  topicId: MathTopicId;
  topicKey: string; // i18n root key e.g. 'numberSystems'
  subTopicIds: string[];
  icon: ReactNode;
  children?: ReactNode; // simulations slot
}

export function MathTopicLayout({ topicId, topicKey, subTopicIds, icon, children }: Props) {
  const { t } = useTranslation('math');
  const tCommon = useTranslation('common').t;
  const drFrostGroups = getDrFrostTasksForTopic(topicId);
  const textbook = getTextbookRef(topicId);
  const problems = getProblemsForTopic(topicId);

  return (
    <div>
      <TopicHero
        title={t(`${topicKey}.title`)}
        intro={t(`${topicKey}.intro`)}
        icon={icon}
      />

      <SectionHeading>{tCommon('sections.subTopics')}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {subTopicIds.map((id) => (
          <div
            key={id}
            className="text-sm text-text-secondary bg-bg-secondary border border-border rounded-md px-3 py-2"
          >
            {t(`${topicKey}.subTopics.${id}`)}
          </div>
        ))}
      </div>

      {children ? (
        <>
          <SectionHeading>{tCommon('sections.simulations')}</SectionHeading>
          <div className="space-y-6">{children}</div>
        </>
      ) : null}

      {drFrostGroups.length > 0 ? (
        <>
          <SectionHeading>{tCommon('sections.drFrost')}</SectionHeading>
          <div className="bg-bg-secondary border border-border rounded-md p-3 mb-3 text-xs text-text-secondary" style={{ borderLeftColor: 'var(--color-accent-sky)', borderLeftWidth: '3px' }}>
            {tCommon('sections.drFrostHint')}
          </div>
          <div className="space-y-3">
            {drFrostGroups.map((group) => (
              <div key={group.subTopicKey} className="bg-bg-secondary border border-border rounded-md p-3">
                <p className="text-sm text-text-secondary mb-2">
                  {t(`${topicKey}.subTopics.${group.subTopicKey}`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tasks.map((task) => (
                    <DrFrostLink key={task} taskNumber={task} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {textbook ? (
        <>
          <SectionHeading>{tCommon('sections.textbookRefs')}</SectionHeading>
          <div className="bg-bg-secondary border border-border rounded-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                  {t('sources.standard')}
                </p>
                <p className="flex items-center gap-2">
                  <BookMarked size={14} className="text-accent-warm" />
                  {textbook.standard.chapter} — {textbook.standard.description}
                </p>
              </div>
              {textbook.extended ? (
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted mb-1">
                    {t('sources.extended')}
                  </p>
                  <p className="flex items-center gap-2">
                    <BookMarked size={14} className="text-accent-clay" />
                    {textbook.extended.chapter} — {textbook.extended.description}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </>
      ) : null}

      {problems.length > 0 ? (
        <>
          <SectionHeading>{tCommon('sections.practice')}</SectionHeading>
          <MathPracticeList problems={problems} />
        </>
      ) : null}
    </div>
  );
}
