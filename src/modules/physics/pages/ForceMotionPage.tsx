import { useTranslation } from 'react-i18next';
import { Compass } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { TermsGrid } from '../../../components/content/TermsGrid';
import { FormulaCheatsheet } from '../../../components/content/FormulaCheatsheet';
import { PracticeQuestions } from '../../../components/content/PracticeQuestions';
import { FORCE_MOTION_QUESTIONS } from '../data/practiceQuestions';
import { NewtonSecondLaw } from '../../../components/simulations/physics/NewtonSecondLaw';
import { TerminalVelocity } from '../../../components/simulations/physics/TerminalVelocity';
import { MomentumCollision } from '../../../components/simulations/physics/MomentumCollision';
import { ReactionBraking } from '../../../components/simulations/physics/ReactionBraking';
import { VectorAddition } from '../../../components/simulations/physics/VectorAddition';
import { MotionGraphs } from '../../../components/simulations/physics/MotionGraphs';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const TERMS = [
  'scalar',
  'vector',
  'displacement',
  'velocity',
  'acceleration',
  'resultantForce',
  'newton1',
  'newton2',
  'newton3',
  'momentum',
  'impulse',
  'terminalVelocity',
  'reactionTime',
  'brakingDistance',
];

const CONCEPTS = ['scalarsVectors', 'newtonLaws', 'momentumImpulse', 'motionGraphs', 'terminalVelocity', 'stoppingDistance'];
const FORMULAS = ['speed', 'acceleration', 'newton2', 'momentum', 'impulse'];

export function ForceMotionPage() {
  const { t, i18n } = useTranslation('physics');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { rule: 'Правило', use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;
  const conceptsHeading = lang === 'ru' ? 'Глубокий разбор' : 'Deeper concepts';

  return (
    <div>
      <TopicHero
        title={t('forceMotion.title')}
        intro={t('forceMotion.intro')}
        icon={<Compass size={28} />}
      />

      <SectionHeading>{t('common.keyTerms')}</SectionHeading>
      <TermsGrid ns="physics" topicKey="forceMotion" termIds={TERMS} />

      <SectionHeading>{conceptsHeading}</SectionHeading>
      <div className="space-y-3">
        {CONCEPTS.map((id) => {
          const item = t(`forceMotion.concepts.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-warm)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('common.simulations')}</SectionHeading>
      <div className="space-y-6">
        <NewtonSecondLaw />
        <VectorAddition />
        <MotionGraphs />
        <TerminalVelocity />
        <MomentumCollision />
        <ReactionBraking />
      </div>

      <SectionHeading>{t('common.formulas')}</SectionHeading>
      <FormulaCheatsheet ns="physics" topicKey="forceMotion" ids={FORMULAS} />

      <SectionHeading>{t('common.practice')}</SectionHeading>
      <PracticeQuestions questions={FORCE_MOTION_QUESTIONS} />
    </div>
  );
}
