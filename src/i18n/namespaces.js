const common = 'common';

const all = [common];

// js file and module.exports are used because of i18next-scanner. It doesn't support imports.
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  all,
  common,
};
