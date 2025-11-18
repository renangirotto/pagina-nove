// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Página Nove - Leituras e textos mal escritos',
      htmlAttrs: {
        lang: 'pt-br',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2025-10-29',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-icons',
  ],
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal'],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/mixins.scss" as *;',
        },
      },
    },
  },
})
