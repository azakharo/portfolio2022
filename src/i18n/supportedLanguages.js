const supportedLanguages = [
  {
    code: 'en-us',
    label: 'ENG',
    icon: 'en',
  },
  {
    code: 'ru-ru',
    label: 'RUS',
    icon: 'ru',
  },
];

const getLangLabelByCode = code => {
  if (!code) {
    return '';
  }

  const lang = supportedLanguages.find(lng => lng.code === code);
  if (!lang) {
    return '';
  }

  return lang.label;
};

const isLangSupported = langCode => {
  if (!langCode) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  return supportedLanguages.some(({ code }) => code === langCode.toLowerCase());
};

// js file and module.exports are used because of i18next-scanner. It doesn't support imports.
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  supportedLanguages,
  getLangLabelByCode,
  isLangSupported,
};
