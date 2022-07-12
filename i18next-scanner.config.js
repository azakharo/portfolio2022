const { supportedLanguages } = require('./src/i18n/supportedLanguages');
const { all, common } = require('./src/i18n/namespaces');

const supportedLangCodes = supportedLanguages.map(lng => lng.code);

module.exports = {
  options: {
    debug: true,
    sort: true,
    removeUnusedKeys: false,

    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    // TODO enable the scanning for Trans comp
    trans: false,
    // trans: {
    //   component: 'Trans',
    //   i18nKey: 'i18nKey',
    //   extensions: ['.js', '.jsx'],
    //   fallbackKey: function(ns, value) {
    //     // Returns a hash value as the fallback key
    //     return sha1(value);
    //   }
    // },
    lngs: supportedLangCodes,
    ns: all,
    defaultNs: common,
    // @param {string} lng The language currently used.
    // @param {string} ns The namespace currently used.
    // @param {string} key The translation key.
    // @param {object} options.
    // @return {string} Returns a default translation for the translation key.
    defaultValue: function(lng, ns, key, { defaultValue }) {
      if (lng === 'en-us' && defaultValue) {
        return defaultValue;
      }
      return '';
    },
    resource: {
      loadPath: './public/locales/{lng}/{ns}.json',
      savePath: './public/locales/{lng}/{ns}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: ':',
    keySeparator: '.',
    pluralSeparator: '_',
    plural: function(lng, ns, key, options) {
      // Disable plurals. They are not used.
      // Otherwise, the following _plural key is generated.
      // Because of the count interpolation param(?)
      // "pagination__labelDisplayedRows": "{from}-{to} of {count}",
      // "pagination__labelDisplayedRows_plural": "__STRING_NOT_TRANSLATED__",
      // return lng !== 'ru';
      return false;
    },
    contextSeparator: '_',
    interpolation: {
      prefix: '{',
      suffix: '}',
    },
  },
};
