// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/missing.min.css"],
  typescript: { shim: false },
  postcss: {
    plugins: {
      // tailwindcss: {},
      // autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      api_base: "http://127.0.0.1:8000/",
    },
  },
});
