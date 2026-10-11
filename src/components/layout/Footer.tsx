import { useTranslation } from 'react-i18next';
export function Footer() {
  const { i18n } = useTranslation();
  return <footer className="mt-16 border-t border-border p-6 text-sm text-text-muted text-center">
    MYP Revision · {i18n.language.startsWith('ru') ? 'Подготовка Grade 10 • ноябрь 2026 · Без аналитики' : 'Grade 10 preparation • November 2026 · No analytics'}
  </footer>;
}
