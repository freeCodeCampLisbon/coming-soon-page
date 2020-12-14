const appColors = {
  primary: '#ffffff',
  info: '#101021',
  link: '#F59A31',
}

appColors['body-background-color'] = appColors.info
appColors.text = appColors.primary

module.exports = {
  jsOutputFile: 'assets/styles/bulma-generated/bulma-colors.js',
  sassOutputFile: 'assets/styles/bulma-generated/generated-bulma-vars.sass',
  cssFallbackOutputFile: 'assets/styles/bulma-generated/generated-fallback.css',
  colorDefs: appColors,
  sassEntryFile: 'assets/styles/main.scss',
  transition: '0',
}
