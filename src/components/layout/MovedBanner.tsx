import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Shown only on the old address (GitHub Pages) once the site has a primary address on AWS.
const PRIMARY = import.meta.env.VITE_PRIMARY_URL as string | undefined;

export function MovedBanner() {
  const { i18n } = useTranslation();
  if (!PRIMARY || typeof window === 'undefined' || PRIMARY.startsWith(window.location.origin)) return null;
  const ru = i18n.language.startsWith('ru');
  return <div className="bg-accent-sage/30 border-b border-border text-sm px-4 py-2 text-center">
    {ru ? 'Сайт переехал на новый адрес. ' : 'The site has a new address. '}
    <Link className="underline font-medium" to="/transfer">{ru ? 'Перенести прогресс и открыть новый адрес' : 'Move your progress and open the new address'}</Link>
  </div>;
}
