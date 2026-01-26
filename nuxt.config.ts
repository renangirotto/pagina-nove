// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Página Nove | Leituras e textos mal escritos",
      htmlAttrs: {
        lang: "pt-br",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${import.meta.env.NUXT_APP_BASE_URL ?? "/"}favicon.ico`,
        },
      ],
    },
  },
  compatibilityDate: "2025-10-29",
  content: {
    renderer: {
      alias: {
        a: "CustomLink",
        blockquote: "CustomBlockquote",
        strong: "CustomStrong",
        p: "TextPage",
      },
      anchorLinks: { h2: false, h3: false, h4: false },
    },
  },
  devtools: { enabled: true },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-icons",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/mixins.scss" as *;',
        },
      },
    },
  },
});
