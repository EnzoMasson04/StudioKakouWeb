import { defineNuxtConfig } from 'nuxt/config';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

export default defineNuxtConfig({
  app: {
    buildAssetsDir: 'nuxt/',
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&Playfair+Display&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', 
          integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65', 
          crossorigin: 'anonymous' 
        },
      ],
      script: [
        { 
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', 
          integrity: 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4', 
          crossorigin: 'anonymous' 
        }
      ]
    }
  },
  css: [
    '~/assets/css/style.css'
  ],
  modules: [
    'nuxt-icon',
    '@nuxtjs/device',
  ],
  plugins: [
    '~/plugins/mysql'
  ],
  imports: {
    dirs: ['./utils'],
  },
  experimental: {
    defaults: {
      nuxtLink: {
        componentName: 'NuxtLink',
        externalRelAttribute: 'noopener noreferrer',
        activeClass: 'router-link-active',
        exactActiveClass: 'router-link-exact-active',
        prefetchedClass: undefined,
        trailingSlash: undefined,
      }
    }
  },
  runtimeConfig: {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  }
});
