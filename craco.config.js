module.exports = {
  style: {
    modules: {
      localIdentName: "[folder]_[local]_[hash:base64:5]"
    },
  },
  eslint: {
    pluginOptions: {
      emitWarning: true,
      fix: true,
    },
  },
};
