// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    //ssr: false,
    app: {
        buildAssetsDir: "nuxt/",
        head: {
            htmlAttrs: {
                lang: "fr"
            },
            meta: [
                {name: 'viewport', 'content': 'width=device-width, initial-scale=1'},
                {charset: 'utf-8'},
                //{'http-equiv': 'Content-Security-Policy', 'content': 'upgrade-insecure-requests'}
            ],
            link: [
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&Playfair+Display&display=swap'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
                {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65', crossorigin: 'anonymous'}
            ],
            style: [],
            script: [
                {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4', crossorigin: 'anonymous'}
            ]
        }
    },
    css: [
        '~/assets/css/style.css'
    ],
    modules: [
        //'@nuxtjs/i18n',
        'nuxt-icon',
        '@nuxtjs/device'
    ],
    imports: {
        dirs: ["./utils"],
    },
    experimental: {
        defaults: {
        nuxtLink: {
            // default values
            componentName: 'NuxtLink',
            externalRelAttribute: 'noopener noreferrer',
            activeClass: 'router-link-active',
            exactActiveClass: 'router-link-exact-active',
            prefetchedClass: undefined, // can be any valid string class name
            trailingSlash: undefined // can be 'append' or 'remove'
        }
        }
    }
    // runtimeConfig: {
    //     public: {
    //         APP_MODE: process.env.APP_MODE,
    //         BACKEND_URL: process.env.BACKEND_URL,
    //         FRONTEND_URL: process.env.FRONTEND_URL,
    //         WEBSITE_URL: process.env.WEBSITE_URL
    //     },
    // },
})
