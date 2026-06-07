// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // 🔴 FIX #1: Enable SSR mode so crawlers see page content
  ssr: true,

  // 🔴 FIX #2: Site URL (required by sitemap module and SEO)
  site: {
    url: 'https://her-village.org',
  },

  // 🔴 FIX #3: Modules for SEO
  modules: [
    '@nuxtjs/sitemap', // Auto-generates /sitemap.xml
  ],

  // 🔴 FIX #4: App-level meta configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  // 🔴 FIX #5: Sitemap configuration
  sitemap: {
    trailingSlash: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
    },
  },

  // 🔴 FIX #6: Nitro (server engine) config for prerendering
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})