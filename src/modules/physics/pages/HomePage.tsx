import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass, Scale, Zap, Waves, ArrowRight, BookOpen, ClipboardCheck } from 'lucide-react';

const TOPICS = [
  { to: '/physics/force-motion', key: 'forceMotion', icon: Compass, accent: 'var(--color-accent-warm)' },
  { to: '/physics/forces-energy', key: 'forcesEnergy', icon: Scale, accent: 'var(--color-accent-sage)' },
  { to: '/physics/electricity', key: 'electricity', icon: Zap, accent: 'var(--color-accent-clay)' },
  { to: '/physics/waves-optics', key: 'wavesOptics', icon: Waves, accent: 'var(--color-accent-sky)' },
] as const;

export function HomePage() {
  const { t } = useTranslation('physics');
  return (
    <div>
      <section className="text-center py-8 md:py-12">
        <p className="text-sm uppercase tracking-widest text-text-muted mb-3">
          {t('home.subtitle')}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
          {t('home.title')}
        </h1>
        <p className="max-w-2xl mx-auto text-text-secondary leading-relaxed">
          {t('home.intro')}
        </p>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {TOPICS.map(({ to, key, icon: Icon, accent }) => (
            <Link
              key={to}
              to={to}
              className="group relative bg-bg-secondary border border-border rounded-lg shadow-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(61,47,31,0.12)]"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-lg opacity-80"
                style={{ background: accent }}
                aria-hidden
              />
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: accent + '33', color: accent }}
                >
                  <Icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl font-medium mb-1">
                    {t(`home.topics.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-snug">
                    {t(`home.topics.${key}.desc`)}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl font-medium mb-4">{t('home.beforeYouStart')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/physics/command-terms"
            className="flex items-center gap-3 bg-bg-secondary border border-border rounded-lg p-4 hover:bg-bg-tertiary transition-colors"
          >
            <BookOpen size={20} className="text-accent-warm" />
            <span className="font-medium">{t('nav.commandTerms')}</span>
            <ArrowRight size={16} className="ml-auto text-text-muted" />
          </Link>
          <Link
            to="/physics/criteria"
            className="flex items-center gap-3 bg-bg-secondary border border-border rounded-lg p-4 hover:bg-bg-tertiary transition-colors"
          >
            <ClipboardCheck size={20} className="text-accent-sage" />
            <span className="font-medium">{t('nav.criteria')}</span>
            <ArrowRight size={16} className="ml-auto text-text-muted" />
          </Link>
        </div>
      </section>
    </div>
  );
}
