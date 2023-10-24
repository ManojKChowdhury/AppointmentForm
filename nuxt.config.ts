// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        "primevue/resources/themes/lara-light-blue/theme.css"
    ],
    runtimeConfig: {
        public: {
            baseUrl: 'https://api.sarathicareservices.com'
        },
    },
    plugins: [
        '~/plugins/primeVue.js'
    ],
    build: {
        transpile: ["primevue"]
    },
    modules: [
        '@pinia/nuxt',
        'nuxt-primevue'
    ]
});