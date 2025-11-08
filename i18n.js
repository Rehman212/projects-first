'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './public/locales/en.json';
import ur from './public/locales/ur.json';
import ar from './public/locales/ar.json';
import it from './public/locales/it.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ur: { translation: ur },
      ar: { translation: ar },
      it: { translation: it },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  });

// ✅ Ensure direction (RTL/LTR) updates whenever language changes
i18n.on('languageChanged', (lng) => {
  const isRTL = lng === 'ar' || lng === 'ur';
  if (typeof document !== 'undefined') {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.dir = isRTL ? 'rtl' : 'ltr';
    localStorage.setItem('language', lng); // persist language
  }
});

export default i18n;
