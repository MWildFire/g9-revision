import { useTranslation } from 'react-i18next';
import { Zap } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { TermsGrid } from '../../../components/content/TermsGrid';
import { FormulaCheatsheet } from '../../../components/content/FormulaCheatsheet';
import { PracticeQuestions } from '../../../components/content/PracticeQuestions';
import { ELECTRICITY_QUESTIONS } from '../data/practiceQuestions';
import { OhmsLaw } from '../../../components/simulations/physics/OhmsLaw';
import { CircuitBuilder } from '../../../components/simulations/physics/CircuitBuilder';
import { ThermistorLDR } from '../../../components/simulations/physics/ThermistorLDR';
import { PowerConsumption } from '../../../components/simulations/physics/PowerConsumption';
import { IVCharacteristics } from '../../../components/simulations/physics/IVCharacteristics';
import { MagneticField } from '../../../components/simulations/physics/MagneticField';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const TERMS = [
  'current',
  'voltage',
  'resistance',
  'charge',
  'seriesCircuit',
  'parallelCircuit',
  'ohmicConductor',
  'thermistor',
  'ldr',
  'staticElectricity',
  'fuse',
  'circuitBreaker',
  'efficiency',
  'kwh',
];

const CONCEPTS = ['currentVoltageResistance', 'ohmsLaw', 'seriesParallel', 'power', 'safety', 'magnetism'];
const FORMULAS = ['ohm', 'power', 'energy', 'efficiency'];

export function ElectricityPage() {
  const { t, i18n } = useTranslation('physics');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { rule: 'Правило', use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;
  const conceptsHeading = lang === 'ru' ? 'Глубокий разбор' : 'Deeper concepts';

  return (
    <div>
      <TopicHero
        title={t('electricity.title')}
        intro={t('electricity.intro')}
        icon={<Zap size={28} />}
      />

      <SectionHeading>{t('common.keyTerms')}</SectionHeading>
      <TermsGrid ns="physics" topicKey="electricity" termIds={TERMS} />

      <SectionHeading>{conceptsHeading}</SectionHeading>
      <div className="space-y-3">
        {CONCEPTS.map((id) => {
          const item = t(`electricity.concepts.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-sky-deep)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('common.simulations')}</SectionHeading>
      <div className="space-y-6">
        <OhmsLaw />
        <IVCharacteristics />
        <CircuitBuilder />
        <ThermistorLDR />
        <MagneticField />
        <PowerConsumption />
      </div>

      <SectionHeading>{t('common.formulas')}</SectionHeading>
      <FormulaCheatsheet ns="physics" topicKey="electricity" ids={FORMULAS} />

      <SectionHeading>{t('common.practice')}</SectionHeading>
      <PracticeQuestions questions={ELECTRICITY_QUESTIONS} />
    </div>
  );
}
