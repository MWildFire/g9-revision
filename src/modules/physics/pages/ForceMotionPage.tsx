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

const FORMULAS = ['speed', 'acceleration', 'newton2', 'momentum', 'impulse'];

export function ForceMotionPage() {
  const { t } = useTranslation('physics');
  return (
    <div>
      <TopicHero
        title={t('forceMotion.title')}
        intro={t('forceMotion.intro')}
        icon={<Compass size={28} />}
      />

      <SectionHeading>{t('common.keyTerms')}</SectionHeading>
      <TermsGrid ns="physics" topicKey="forceMotion" termIds={TERMS} />

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
