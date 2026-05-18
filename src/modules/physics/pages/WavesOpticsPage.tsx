import { useTranslation } from 'react-i18next';
import { Waves } from 'lucide-react';
import { TopicHero, SectionHeading } from '../../../components/content/TopicHero';
import { TermsGrid } from '../../../components/content/TermsGrid';
import { FormulaCheatsheet } from '../../../components/content/FormulaCheatsheet';
import { PracticeQuestions } from '../../../components/content/PracticeQuestions';
import { WAVES_OPTICS_QUESTIONS } from '../data/practiceQuestions';
import { WaveExplorer } from '../../../components/simulations/physics/WaveExplorer';
import { ReflectionRefraction } from '../../../components/simulations/physics/ReflectionRefraction';
import { Diffraction } from '../../../components/simulations/physics/Diffraction';
import { EMSpectrum } from '../../../components/simulations/physics/EMSpectrum';
import { LensSim } from '../../../components/simulations/physics/LensSim';
import { SoundWave } from '../../../components/simulations/physics/SoundWave';
import { ColorFilters } from '../../../components/simulations/physics/ColorFilters';
import { DetailedCard, DetailedItem } from '../../../components/content/DetailedCard';

const TERMS = [
  'amplitude',
  'wavelength',
  'frequency',
  'longitudinal',
  'transverse',
  'emSpectrum',
  'reflection',
  'refraction',
  'diffraction',
  'lens',
  'filter',
];

const CONCEPTS = ['waveTypes', 'waveEquation', 'emSpectrum', 'reflection', 'refraction', 'sound'];
const FORMULAS = ['waveSpeed', 'period', 'snell', 'lens'];

export function WavesOpticsPage() {
  const { t, i18n } = useTranslation('physics');
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const labels = lang === 'ru'
    ? { use: 'Когда', form: 'Форма', examples: 'Примеры', tip: 'Подсказка', watchOut: 'Внимание' }
    : undefined;
  const conceptsHeading = lang === 'ru' ? 'Глубокий разбор' : 'Deeper concepts';

  return (
    <div>
      <TopicHero title={t('wavesOptics.title')} intro={t('wavesOptics.intro')} icon={<Waves size={28} />} />

      <SectionHeading>{t('common.keyTerms')}</SectionHeading>
      <TermsGrid ns="physics" topicKey="wavesOptics" termIds={TERMS} />

      <SectionHeading>{conceptsHeading}</SectionHeading>
      <div className="space-y-3">
        {CONCEPTS.map((id) => {
          const item = t(`wavesOptics.concepts.${id}`, { returnObjects: true }) as DetailedItem;
          return <DetailedCard key={id} item={item} borderColor="var(--color-accent-clay)" labels={labels} />;
        })}
      </div>

      <SectionHeading>{t('common.simulations')}</SectionHeading>
      <div className="space-y-6">
        <WaveExplorer />
        <SoundWave />
        <ReflectionRefraction />
        <Diffraction />
        <EMSpectrum />
        <LensSim />
        <ColorFilters />
      </div>

      <SectionHeading>{t('common.formulas')}</SectionHeading>
      <FormulaCheatsheet ns="physics" topicKey="wavesOptics" ids={FORMULAS} />

      <SectionHeading>{t('common.practice')}</SectionHeading>
      <PracticeQuestions questions={WAVES_OPTICS_QUESTIONS} />
    </div>
  );
}
