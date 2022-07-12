import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ICU from 'i18next-icu';

import { all as namespaces, common as commonNs } from './namespaces';

export const defaultLanguage = 'en-us';

i18n
  .use(ICU)
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    ns: namespaces,
    defaultNS: commonNs as string,
    fallbackNS: commonNs as string,
    fallbackLng: defaultLanguage,
    lowerCaseLng: true,
    nonExplicitSupportedLngs: true,
    load: 'currentOnly',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      prefix: '{',
      suffix: '}',
    },
    saveMissing: false,
    // console logging
    debug: process.env.NODE_ENV === 'development',
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{lng}/{ns}.json`,
      // Adds parameters to resource URL. For example, 'dashboard.json' -> 'dashboard.json?v=1.3.5'.
      // This is necessary for providing unique URL for a translation file.
      queryStringParams: { v: process.env.REACT_APP_VERSION as string },
    },
    returnEmptyString: false,
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
  });

export default i18n;
