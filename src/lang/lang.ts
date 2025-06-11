import i18n from "i18next";
import en from "./en.json";
import fr from "./fr.json";
import { initReactI18next } from "react-i18next";
import { useMemo } from "react";
import { stringMapping } from "./stringMapping";
import Languages from "../domain/enums/languages";
import { getLocales } from "react-native-localize";

// Detect the device language
const getDeviceLanguage = (): string => {
  const locales = getLocales();
  console.log(`Locales: ${locales.map((e) => e.languageTag)}`);
  return locales[0]?.languageTag || Languages.english.toString();
};

// Initialize i18next
i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources: {
    [Languages.english]: { translation: en },
    [Languages.french]: { translation: fr },
  },
  lng: getDeviceLanguage(),
  fallbackLng: Languages.english.toString(),
  interpolation: {
    escapeValue: false,
  },
});

export const i18nLocale = i18n;

type AppStringKey = keyof typeof stringMapping;

export const useLocalisation = () => {
  return useMemo(() => {
    const localizedStrings: Record<AppStringKey, string> = {} as Record<
      AppStringKey,
      string
    >;

    (Object.keys(stringMapping) as AppStringKey[]).forEach((key) => {
      localizedStrings[key] = i18nLocale.t(stringMapping[key]);
    });

    return localizedStrings;
  }, []);
};
