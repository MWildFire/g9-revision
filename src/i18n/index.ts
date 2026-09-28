import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './en/common.json';
import ruCommon from './ru/common.json';
import enHub from './en/hub.json';
import ruHub from './ru/hub.json';

const resources = {
  en: {
    common: enCommon,
    hub: enHub,
  },
  ru: {
    common: ruCommon,
    hub: ruHub,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    defaultNS: 'common',
    ns: ['common', 'hub', 'physics', 'math', 'geography', 'biology', 'chemistry', 'english', 'french', 'arabic'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'g9-lang',
      caches: ['localStorage'],
    },
  });

export default i18n;

export async function loadSubjectTranslations(subject: string): Promise<void> {
  const loaders: Record<string, () => Promise<unknown>> = {
    physics: async () => { const [en, ru] = await Promise.all([import('./en/physics.json'), import('./ru/physics.json')]); i18n.addResourceBundle('en', 'physics', en.default); i18n.addResourceBundle('ru', 'physics', ru.default); },
    math: async () => { const [en, ru] = await Promise.all([import('./en/math.json'), import('./ru/math.json')]); i18n.addResourceBundle('en', 'math', en.default); i18n.addResourceBundle('ru', 'math', ru.default); },
    geography: async () => { const [en, ru] = await Promise.all([import('./en/geography.json'), import('./ru/geography.json')]); i18n.addResourceBundle('en', 'geography', en.default); i18n.addResourceBundle('ru', 'geography', ru.default); },
    biology: async () => { const [en, ru] = await Promise.all([import('./en/biology.json'), import('./ru/biology.json')]); i18n.addResourceBundle('en', 'biology', en.default); i18n.addResourceBundle('ru', 'biology', ru.default); },
    chemistry: async () => { const [en, ru] = await Promise.all([import('./en/chemistry.json'), import('./ru/chemistry.json')]); i18n.addResourceBundle('en', 'chemistry', en.default); i18n.addResourceBundle('ru', 'chemistry', ru.default); },
    english: async () => { const [en, ru] = await Promise.all([import('./en/english.json'), import('./ru/english.json')]); i18n.addResourceBundle('en', 'english', en.default); i18n.addResourceBundle('ru', 'english', ru.default); },
    french: async () => { const [en, ru] = await Promise.all([import('./en/french.json'), import('./ru/french.json')]); i18n.addResourceBundle('en', 'french', en.default); i18n.addResourceBundle('ru', 'french', ru.default); },
    arabic: async () => { const [en, ru] = await Promise.all([import('./en/arabic.json'), import('./ru/arabic.json')]); i18n.addResourceBundle('en', 'arabic', en.default); i18n.addResourceBundle('ru', 'arabic', ru.default); },
  };
  await loaders[subject]?.();
}
