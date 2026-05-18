import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ITEMS = [
  { to: '/', key: 'home' },
  { to: '/command-terms', key: 'commandTerms' },
  { to: '/force-motion', key: 'forceMotion' },
  { to: '/forces-energy', key: 'forcesEnergy' },
  { to: '/electricity', key: 'electricity' },
  { to: '/waves-optics', key: 'wavesOptics' },
  { to: '/criteria', key: 'criteria' },
  { to: '/resources', key: 'resources' },
];

export function MobileNav() {
  const { t } = useTranslation();
  return (
    <nav className="lg:hidden -mx-4 md:-mx-6 mb-6 overflow-x-auto">
      <div className="px-4 md:px-6 flex gap-2 w-max">
        {ITEMS.map(({ to, key }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `whitespace-nowrap px-3 py-1.5 rounded-md text-sm transition-colors border ${
                isActive
                  ? 'bg-bg-secondary text-text-primary border-border shadow-soft font-medium'
                  : 'text-text-secondary border-transparent hover:bg-bg-secondary'
              }`
            }
          >
            {t(`nav.${key}`)}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
