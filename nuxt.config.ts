// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
        title: 'Rishan-TK',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        bodyAttrs: {
          class: 'bg-dark-1'
        }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  "nitro": {
    "output": {
        dir: 'output',
        serverDir: 'output/server',
        publicDir: 'output/public'
    }
}
})
