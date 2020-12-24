import global from './utils/index'
import getMeta from './utils/meta'

const meta = getMeta()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  // ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en-GB',
    },
    title: 'freeCodeCamp Lisbon - dev events based on Lisbon',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || '',
      },
      { property: 'og:site_name', content: global.siteName || '' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || '',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: global.siteName || '' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css',
        body: true,
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/main.scss', '@/assets/fonts/icons/fcc.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vee-validate.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/prismic',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    'nuxt-purgecss',
  ],
  prismic: {
    endpoint: process.env.PRISMIC_API_URL,
    preview: false,
    // process.env.NODE_ENV !== 'production',
    /* see configuration for more */
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  buefy: {
    materialDesignIcons: false,
  },

  'google-gtag': {
    id: process.env.G_TAG,
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    },
    debug: process.env.NODE_ENV !== 'production', // enable to track in dev mode
  },

  modern: true,

  pageTransition: 'page',

  generate: {
    fallback: '404.html',
  },

  sitemap: {
    hostname: process.env.CLIENT_URL,
    gzip: true,
  },

  robots: [
    {
      UserAgent: '*',
      Disallow: '/_nuxt/',
    },
    {
      sitemap: process.env.CLIENT_URL + '/sitemap.xml',
    },
  ],

  purgeCSS: {
    whitelistPatterns: [/^icon-/, /^mdi/],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL || '',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vee-validate'],
  },
}
