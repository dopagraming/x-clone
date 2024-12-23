import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./translition/EN.json"
import AR from "./translition/AR.json"
const resources = {
    en: {
        translation: EN
    },
    ar: {
        translation: AR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;