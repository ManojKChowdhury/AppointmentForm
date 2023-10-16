// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bulma/css/bulma.min.css',
  ],
  runtimeConfig:{
    public: {
      baseUrl: 'http://ec2-3-110-54-181.ap-south-1.compute.amazonaws.com:3005'
    }
  }

})
