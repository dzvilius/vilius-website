export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-gb',
      },
      title: 'Vilius Dzemyda | UI/UX Front End Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          key: 'description',
          name: 'description',
          content:
            'UI/UX Front End Developer based in Ireland with expertise in UX design and modern web technologies.',
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
      bodyAttrs: {
        class: 'has-navbar-fixed-top',
      },
    },
  },

  modules: [
    'nuxt-gtag'
  ],

  gtag: {
    id: 'G-ES3MS8Y2QV',
    config: {
      anonymize_ip: true,
      send_page_view: false,
      linker: {
        domains: ['viliusdzemyda.com']
      }
    },
    debug: false,
    disableAutoPageTrack: false,
  },

  plugins: [
    '~/plugins/vue-scrollto'
  ],

  compatibilityDate: '2024-11-28'
})