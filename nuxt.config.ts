// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "My App",
      meta: [{ name: "description", content: "test abaout meta nuxt3" }],
      link: [{ rel: "stylesheet", href: "http://fonts.googleapis.com/icon?family=Material+Icons" }],
    },
  },

  runtimeConfig:{
    currencykey: process.env.CURRENCY_API_KEY ,
  }
  
});
