import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ExamCountdown } from '../progress/ExamCountdown';
import { ROUTES } from '../../config/routes';

export function Header() {
  const { t } = useTranslation('common');
  return (
    <header className="sticky top-0 z-40 bg-bg-primary/85 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <Link to={ROUTES.HUB} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden>
            <circle cx="32" cy="32" r="6" fill="var(--color-text-primary)" />
            <ellipse cx="32" cy="32" rx="22" ry="9" stroke="var(--color-accent-warm)" strokeWidth="2.5" fill="none" />
            <ellipse cx="32" cy="32" rx="22" ry="9" stroke="var(--color-accent-sage)" strokeWidth="2.5" fill="none" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="22" ry="9" stroke="var(--color-accent-sky)" strokeWidth="2.5" fill="none" transform="rotate(120 32 32)" />
          </svg>
          <span className="font-serif text-lg md:text-xl font-medium text-text-primary">
            {t('brand')}
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ExamCountdown variant="compact" />
          </div>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
