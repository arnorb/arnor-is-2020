
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Arnór Bogason – vefhönnuður' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/fonts/inter.css',
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-responsive-loader',
    '@nuxtjs/markdownit'
  ],
  bootstrapVue: {
    components: ['BContainer', 'BRow', 'BCol', 'BNav', 'BNavItem', 'BNavItemDropdown', 'BImg'],
    directives: [],
    css: false,
    bvCSS: false
  },
  responsiveLoader: {
    sizes: [750,860,1080,1400,2000]
  },
  markdownit: {
    injected: true, 
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

      const options = {
        transformAssetUrls: {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }
      }

    }
  }
}
