import { useTranslation } from 'react-i18next';
import { Scale } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { TermsGrid } from '../../../components/content/TermsGrid';
import { FormulaCheatsheet } from '../../../components/content/FormulaCheatsheet';
import { PracticeQuestions } from '../../../components/content/PracticeQuestions';
import { FORCES_ENERGY_QUESTIONS } from '../data/practiceQuestions';
import { HookesLaw } from '../../../components/simulations/physics/HookesLaw';
import { PressureSim } from '../../../components/simulations/physics/PressureSim';
import { DensityFloater } from '../../../components/simulations/physics/DensityFloater';
import { FluidPressure } from '../../../components/simulations/physics/FluidPressure';
import { EnergyTransformations } from '../../../components/simulations/physics/EnergyTransformations';
import { WorkPower } from '../../../components/simulations/physics/WorkPower';

const TERMS = [
  'contactForce',
  'nonContactForce',
  'elasticity',
  'hookesLaw',
  'workDone',
  'energyTransfer',
  'pressure',
  'atmosphericPressure',
  'density',
  'fluidPressure',
];

const FORMULAS = ['hooke', 'work', 'pressure', 'density', 'fluidPressure'];

export function ForcesEnergyPage() {
  const { t } = useTranslation('physics');
  return (
    <div>
      <TopicHero
        title={t('forcesEnergy.title')}
        intro={t('forcesEnergy.intro')}
        icon={<Scale size={28} />}
      />

      <SectionHeading>{t('common.keyTerms')}</SectionHeading>
      <TermsGrid ns="physics" topicKey="forcesEnergy" termIds={TERMS} />

      <SectionHeading>{t('common.simulations')}</SectionHeading>
      <div className="space-y-6">
        <HookesLaw />
        <WorkPower />
        <EnergyTransformations />
        <PressureSim />
        <DensityFloater />
        <FluidPressure />
      </div>

      <SectionHeading>{t('common.formulas')}</SectionHeading>
      <FormulaCheatsheet ns="physics" topicKey="forcesEnergy" ids={FORMULAS} />

      <SectionHeading>{t('common.practice')}</SectionHeading>
      <PracticeQuestions questions={FORCES_ENERGY_QUESTIONS} />
    </div>
  );
}
