module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 's',
        path: '/s/*',
        component: resolve(__dirname, 'pages/multi-slash.vue')
      })
      routes.push({
        name: 'regexp',
        path: '/([a-d]+)/*',
        component: resolve(__dirname, 'pages/regexp.vue')
      })
      routes.push({
        name: 'ab',
        path: '/(c|d)-:a/(e|f)-:b/*',
        component: resolve(__dirname, 'pages/parent-child.vue')
      })
    }
  }
}

