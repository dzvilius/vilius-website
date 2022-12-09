module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-gb',
    },
    title: 'Vilius Dzemyda | Front-End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Front-end web developer based in Ireland. My primary skills are UXD and UI development. I design and develop web applications using UX methodologies and modern web tech.',
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
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-ES3MS8Y2QV', body: false },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ES3MS8Y2QV');
        `,
        type: 'text/javascript',
        async: true,
        mode: 'client',
      }
    ],
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
  modules: [],

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
