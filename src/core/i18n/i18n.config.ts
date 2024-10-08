import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { bn, en } from './translation';

const resources = {
    en:{
        translation: en,
    },
    bn: {
        translation: bn,
    },
};

i18next.use(initReactI18next).init({
    lng:'en',
    fallbackLng: 'en',
    debug: true,
    compatibilityJSON:'v3',
    interpolation: {
        escapeValue: false,
    },
    resources,
});

export default i18next;
