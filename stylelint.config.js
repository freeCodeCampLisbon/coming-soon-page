module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-duplicate-selectors': null,
    'custom-property-empty-line-before': null,
    'at-rule-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
}
