// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon','@vee-validate/nuxt','@nuxt/test-utils/module'],
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  vite: {
    test: {
      globals: true,
      environment: 'jsdom',
    },
  },
});