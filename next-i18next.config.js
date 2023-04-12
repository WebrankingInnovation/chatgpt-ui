module.exports = {
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales',
};
