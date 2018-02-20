module.exports = {
  build: {
    vendor: [
      'vuetify'
    ],
    extractCSS: true
  },

  head: {
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  loading: { color: '#607D8B' },

  manifest: {
    name: 'PWA Template',
    short_name: 'PWA',
    theme_color: '#607D8B'
  },

  plugins: ['~/plugins/vuetify'],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ]
}
