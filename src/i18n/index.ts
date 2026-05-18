import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './en/common.json';
import ruCommon from './ru/common.json';
import enHub from './en/hub.json';
import ruHub from './ru/hub.json';
import enPhysics from './en/physics.json';
import ruPhysics from './ru/physics.json';
import enMath from './en/math.json';
import ruMath from './ru/math.json';
import enGeography from './en/geography.json';
import ruGeography from './ru/geography.json';
import enBiology from './en/biology.json';
import ruBiology from './ru/biology.json';
import enChemistry from './en/chemistry.json';
import ruChemistry from './ru/chemistry.json';
import enEnglish from './en/english.json';
import ruEnglish from './ru/english.json';
import enFrench from './en/french.json';
import ruFrench from './ru/french.json';
import enArabic from './en/arabic.json';
import ruArabic from './ru/arabic.json';

const resources = {
  en: {
    common: enCommon,
    hub: enHub,
    physics: enPhysics,
    math: enMath,
    geography: enGeography,
    biology: enBiology,
    chemistry: enChemistry,
    english: enEnglish,
    french: enFrench,
    arabic: enArabic,
  },
  ru: {
    common: ruCommon,
    hub: ruHub,
    physics: ruPhysics,
    math: ruMath,
    geography: ruGeography,
    biology: ruBiology,
    chemistry: ruChemistry,
    english: ruEnglish,
    french: ruFrench,
    arabic: ruArabic,
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
