export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ggblog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/aos@next/dist/aos.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Pacifico&display=swap' }
    ],
    // script: [
    //   { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', body: true }
    // ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/aos.client'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  generate: {
    routes: [
      '/blog',
    ],
    async routes() {
      const { $content } = require('@nuxt/content');
      const files = await $content('posts')
      .only(['slug'])
      .fetch();

      return files.map( file => `/blog/${file.slug}` )

    }
  }
}
