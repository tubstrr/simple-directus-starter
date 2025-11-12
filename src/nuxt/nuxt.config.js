// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      directus: {
        url: process.env.NUXT_PUBLIC_DIRECTUS_URL,
      },
    },
  },

  devtools: { enabled: true },

  ui: {
    theme: {
      // Register semantic colors that will be available in your components
      // These define which color names can be used, not their actual values
      colors: [
        "primary",
        "secondary",
        "brand", // Custom semantic color
        "success",
        "info",
        "warning",
        "error",
        "neutral",
      ],
    },
  },

  modules: ["@nuxt/image", "@nuxt/ui", "nuxt-directus", "@nuxt/icon"],

  css: ["@/assets/css/main.css"],

  compatibilityDate: "2025-07-15",
});
