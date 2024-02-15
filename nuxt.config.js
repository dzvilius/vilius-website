module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-gb',
    },
    title: 'Vilius Dzemyda | Front End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Front End Developer based in Ireland with expertise in UX design and modern web technologies.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Monoton|Ubuntu:400,500,700',
      },
    ],
    script: [],
    bodyAttrs: {
      class: 'has-navbar-fixed-top',
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  // env: {
  //   browser: true,
  // },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-scrollto' }],

  /*
   ** Nuxt.js modules
   */
  // modules: [
  //   ['@nuxtjs/dotenv'],
  // ],

  buildModules: [
    ['@nuxtjs/google-gtag', {
      id: 'G-ES3MS8Y2QV',
      config: {
        anonymize_ip: true, // anonymize IP
        send_page_view: false, // might be necessary to avoid duplicated page track on page reload
        linker: {
          domains: ['viliusdzemyda.com']
        }
      },
      debug: false, // enable to track in dev mode
      disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    }]
  ],

  vendor: [],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
