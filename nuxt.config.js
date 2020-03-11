
export default {
  mode: 'universal',

  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Arnór Bogason – vefhönnuður' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', sizes: '16x16', type: 'image/png', href: '/safari-pinned-tab.svg', color: '#ffffff' }
      
      
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./assets/content/verkefni').map(file => {
        return {
          route: `/verkefni/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/verkefni/${file}`),
        };
      });
    }

  },

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
    css: false,
    bvCSS: false,
    icons: true
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
