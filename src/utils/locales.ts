const localeMap: { [key: string]: () => Promise<any> } = {
  'en': () => import('date-fns/locale/en-US'),
  'zh-tw': () => import('date-fns/locale/zh-TW'),
  'ko-kr': () => import('date-fns/locale/ko'),
  'uk-ua': () => import('date-fns/locale/uk'),
  'vi': () => import('date-fns/locale/vi'),
  'ru': () => import('date-fns/locale/ru'),
  'es': () => import('date-fns/locale/es'),
  'de': () => import('date-fns/locale/de'),
  'fr': () => import('date-fns/locale/fr'),
  'tr': () => import('date-fns/locale/tr'),
  'af': () => import('date-fns/locale/af'),
  'ar': () => import('date-fns/locale/ar'),
  'az': () => import('date-fns/locale/az'),
  'ar-dz': () => import('date-fns/locale/ar-DZ'),
  'ar-eg': () => import('date-fns/locale/ar-EG'),
  'ar-ma': () => import('date-fns/locale/ar-MA'),
  'ar-sa': () => import('date-fns/locale/ar-SA'),
  'ar-tn': () => import('date-fns/locale/ar-TN'),
  'be-tarask': () => import('date-fns/locale/be-tarask'),
  'be': () => import('date-fns/locale/be'),
  'bg': () => import('date-fns/locale/bg'),
  'bn': () => import('date-fns/locale/bn'),
  'bs': () => import('date-fns/locale/bs'),
  'ca': () => import('date-fns/locale/ca'),
  'cs': () => import('date-fns/locale/cs'),
  'cy': () => import('date-fns/locale/cy'),
  'da': () => import('date-fns/locale/da'),
  'de-at': () => import('date-fns/locale/de-AT'),
  'el': () => import('date-fns/locale/el'),
  'eo': () => import('date-fns/locale/eo'),
  'et': () => import('date-fns/locale/et'),
  'eu': () => import('date-fns/locale/eu'),
  'fa-ir': () => import('date-fns/locale/fa-IR'),
  'fi': () => import('date-fns/locale/fi'),
  'fr-ca': () => import('date-fns/locale/fr-CA'),
  'fr-ch': () => import('date-fns/locale/fr-CH'),
  'fy': () => import('date-fns/locale/fy'),
  'gd': () => import('date-fns/locale/gd'),
  'gl': () => import('date-fns/locale/gl'),
  'gu': () => import('date-fns/locale/gu'),
  'he': () => import('date-fns/locale/he'),
  'hi': () => import('date-fns/locale/hi'),
  'hr': () => import('date-fns/locale/hr'),
  'ht': () => import('date-fns/locale/ht'),
  'hu': () => import('date-fns/locale/hu'),
  'hy': () => import('date-fns/locale/hy'),
  'id': () => import('date-fns/locale/id'),
  'is': () => import('date-fns/locale/is'),
  'it-ch': () => import('date-fns/locale/it-CH'),
  'it': () => import('date-fns/locale/it'),
  'ja-hira': () => import('date-fns/locale/ja-Hira'),
  'ja': () => import('date-fns/locale/ja'),
  'ka': () => import('date-fns/locale/ka'),
  'kk': () => import('date-fns/locale/kk'),
  'km': () => import('date-fns/locale/km'),
  'kn': () => import('date-fns/locale/kn'),
  'lb': () => import('date-fns/locale/lb'),
  'lt': () => import('date-fns/locale/lt'),
  'lv': () => import('date-fns/locale/lv'),
  'mk': () => import('date-fns/locale/mk'),
  'mn': () => import('date-fns/locale/mn'),
  'ms': () => import('date-fns/locale/ms'),
  'mt': () => import('date-fns/locale/mt'),
  'nb': () => import('date-fns/locale/nb'),
  'nl-be': () => import('date-fns/locale/nl-BE'),
  'nl': () => import('date-fns/locale/nl'),
  'nn': () => import('date-fns/locale/nn'),
  'oc': () => import('date-fns/locale/oc'),
  'pl': () => import('date-fns/locale/pl'),
  'pt-br': () => import('date-fns/locale/pt-BR'),
  'pt': () => import('date-fns/locale/pt'),
  'ro': () => import('date-fns/locale/ro'),
  'sk': () => import('date-fns/locale/sk'),
  'sl': () => import('date-fns/locale/sl'),
  'sq': () => import('date-fns/locale/sq'),
  'sr-latn': () => import('date-fns/locale/sr-Latn'),
  'sr': () => import('date-fns/locale/sr'),
  'sv': () => import('date-fns/locale/sv'),
  'ta': () => import('date-fns/locale/ta'),
  'te': () => import('date-fns/locale/te'),
  'th': () => import('date-fns/locale/th'),
  'ug': () => import('date-fns/locale/ug'),
  'uz-cyrl': () => import('date-fns/locale/uz-Cyrl'),
  'uz': () => import('date-fns/locale/uz'),
};

export const loadLocale = async (lang: string) => {
  const loadLocaleFn = localeMap[lang];
  if (loadLocaleFn) {
    try {
      const localeModule = await loadLocaleFn();
      return localeModule.default;
    } catch (error) {
      console.error(`Failed to load locale: ${lang}`, error);
      return null;
    }
  }
  return null;
};