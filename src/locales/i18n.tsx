import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enTranslation from './en.json';
import frTranslation from './fr.json';

const resources = {
  en: {translation: enTranslation},
  fr: {translation: frTranslation},
};

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    storage: AsyncStorage, // Temporary workaround for AsyncStorage typing issue
  })
  .then(() => {
    // i18n is initialized
  });

export default i18n;
