import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import enUsTrans from "../../public/locales/en-US.json";
import esEsTrans from "../../public/locales/es-ES.json";
import zhCnTrans from "../../public/locales/zh-CN.json";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": {
        translation: enUsTrans
      },
      "es-ES": {
        translation: esEsTrans
      },
      "zh-CN": {
        translation: zhCnTrans
      }
    },
    fallbackLng: "en-US",
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
