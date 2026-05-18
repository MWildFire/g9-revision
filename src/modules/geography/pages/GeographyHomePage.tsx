import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Waves, Plane, Battery, Cloud, ArrowRight } from 'lucide-react';
import { TopicHero } from '../../../components/content/TopicHero';
import { ROUTES } from '../../../config/routes';

const TOPICS = [
  { to: ROUTES.GEOGRAPHY.RIVERS, key: 'rivers', icon: Waves, accent: 'var(--color-accent-sky-deep)' },
  { to: ROUTES.GEOGRAPHY.TOURISM, key: 'tourism', icon: Plane, accent: 'var(--color-accent-warm)' },
  { to: ROUTES.GEOGRAPHY.RESOURCE_RELIANCE, key: 'resourceReliance', icon: Battery, accent: 'var(--color-accent-clay)' },
  { to: ROUTES.GEOGRAPHY.ATMOSPHERIC_HAZARDS, key: 'atmosphericHazards', icon: Cloud, accent: 'var(--color-accent-sage)' },
];

export function GeographyHomePage() {
  const { t } = useTranslation('geography');

  return (
    <div>
      <TopicHero title={t('home.title')} intro={t('home.intro')} icon={<Globe size={28} />} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
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
              <ArrowRight size={16} className="text-text-muted group-hover:text-text-primary transition-all shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
