import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const setLanguage = (lng: 'ru' | 'en') => {
    void i18n.changeLanguage(lng);
    try {
      localStorage.setItem('g9-lang', lng);
    } catch {
      /* ignore */
    }
  };

  const langs: Array<{ code: 'ru' | 'en'; label: string }> = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="inline-flex p-0.5 bg-bg-tertiary rounded-md border border-border">
      {langs.map((l) => {
        const active = current === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLanguage(l.code)}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              active
                ? 'bg-bg-secondary text-text-primary shadow-soft'
                : 'text-text-secondary hover:text-text-primary'
            }`}
            aria-pressed={active}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
