// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      graphqlUrl: process.env.GRAPHQL_URL || 'default_value'
    }
  },
  serverMiddleware: [
    { path: '/api/testEnv', handler: '~/server/middleware/testEnv.ts' }
  ]
})
