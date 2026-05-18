import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Hash, Variable, GitBranch, Triangle, BarChart3, ClipboardCheck, Layers, ArrowRight } from 'lucide-react';
import { TopicHero } from '../../../components/content/TopicHero';
import { ROUTES } from '../../../config/routes';

const TOPICS = [
  { to: ROUTES.MATH.NUMBER_SYSTEMS, key: 'numberSystems', icon: Hash, accent: 'var(--color-accent-sky)' },
  { to: ROUTES.MATH.FUNCTIONS_ALGEBRA, key: 'functionsAlgebra', icon: Variable, accent: 'var(--color-accent-warm)' },
  { to: ROUTES.MATH.SEQUENCES, key: 'sequences', icon: GitBranch, accent: 'var(--color-accent-sage)' },
  { to: ROUTES.MATH.GEOMETRY_TRIG, key: 'geometryTrig', icon: Triangle, accent: 'var(--color-accent-clay)' },
  { to: ROUTES.MATH.STATS_PROB, key: 'statsProb', icon: BarChart3, accent: 'var(--color-accent-sky-deep)' },
];

const PRACTICE = [
  { to: ROUTES.MATH.EOY_PRACTICE, key: 'eoyPractice', icon: Layers, accent: 'var(--color-accent-warm)' },
  { to: ROUTES.MATH.CRITERIA_TRAINER, key: 'criteriaTrainer', icon: ClipboardCheck, accent: 'var(--color-accent-sage)' },
];

export function MathHomePage() {
  const { t } = useTranslation('math');

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Hash size={28} />} />

      <div className="mt-6 bg-bg-secondary border border-border rounded-md p-5" style={{ borderLeftColor: 'var(--color-accent-sky-deep)', borderLeftWidth: '4px' }}>
        <h3 className="font-serif text-lg font-medium mb-2">{t('home.examStructure')}</h3>
        <p className="text-sm text-text-secondary">{t('home.examStructureBody')}</p>
      </div>

      <h2 className="font-serif text-xl font-medium mt-12 mb-4">{t('home.topics')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TOPICS.map(({ to, key, icon: Icon, accent }) => (
          <Link
            key={to}
            to={to}
            className="group relative bg-bg-secondary border border-border rounded-lg shadow-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
            style={{ borderTopColor: accent, borderTopWidth: '3px' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0" style={{ background: accent + '33', color: accent }}>
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg font-medium mb-1">{t(`${key}.title`)}</h3>
                <p className="text-sm text-text-secondary leading-snug line-clamp-2">
                  {t(`${key}.intro`)}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
              />
            </div>
          </Link>
        ))}
      </div>

      <h2 className="font-serif text-xl font-medium mt-12 mb-4">{t('home.practice')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PRACTICE.map(({ to, key, icon: Icon, accent }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-3 bg-bg-secondary border border-border rounded-lg p-4 hover:bg-bg-tertiary/40 transition-colors"
          >
            <Icon size={20} style={{ color: accent }} />
            <div className="flex-1">
              <p className="font-medium">{t(`${key}.title`)}</p>
              <p className="text-xs text-text-muted">{t(`${key}.intro`)}</p>
            </div>
            <ArrowRight size={16} className="text-text-muted" />
          </Link>
        ))}
      </div>
    </div>
  );
}
