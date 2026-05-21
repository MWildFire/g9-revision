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
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

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

const CONCEPTS = ['hookesLaw', 'work', 'energyStores', 'pressure', 'density', 'fluidPressure'];
const FORMULAS = ['hooke', 'work', 'pressure', 'density', 'fluidPressure'];

export function ForcesEnergyPage() {
  const { t, i18n } = useTranslation('physics');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { rule: 'Правило', use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;
  const conceptsHeading = lang === 'ru' ? 'Глубокий разбор' : 'Deeper concepts';

  return (
    <div>
      <TopicHero
        title={t('forcesEnergy.title')}
        intro={t('forcesEnergy.intro')}
        icon={<Scale size={28} />}
      />

      <SectionHeading>{t('common.keyTerms')}</SectionHeading>
      <TermsGrid ns="physics" topicKey="forcesEnergy" termIds={TERMS} />

      <SectionHeading>{conceptsHeading}</SectionHeading>
      <div className="space-y-3">
        {CONCEPTS.map((id) => {
          const item = t(`forcesEnergy.concepts.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-sage)" labels={labels} />;
        })}
      </div>

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
