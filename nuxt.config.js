module.exports = {
  loading: { color: '#607D8B' },

  manifest: {
    name: 'PWA Template',
    short_name: 'PWA',
    theme_color: '#607D8B'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/vuetify', {materialIcons: true}]
  ]
}
