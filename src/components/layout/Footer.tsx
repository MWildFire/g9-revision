import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function Footer() {
  const { i18n } = useTranslation();
  const ru = i18n.language.startsWith('ru');
  return <footer className="mt-16 border-t border-border p-6 text-sm text-text-muted text-center">
    MYP Revision · {ru ? 'Подготовка, 10 класс • ноябрь 2026 · Без аналитики' : 'Grade 10 preparation • November 2026 · No analytics'}
    {' · '}<Link className="underline" to="/transfer">{ru ? 'Перенести прогресс' : 'Move progress'}</Link>
  </footer>;
}
