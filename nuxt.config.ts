// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bulma/css/bulma.min.css',
  ],
  runtimeConfig:{
    public: {
      baseUrl: 'https://api.sarathicareservices.com'
    },
  },
  // plugins: [
  //   '~/plugins/primeVue.js'
  // ],
	// build: {
	// 	transpile: ["primevue"]
	// }
});