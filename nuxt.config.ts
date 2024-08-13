export default defineNuxtConfig({
  ssr: false, // Временно отключаем SSR
  runtimeConfig: {
    public: {
      graphqlUrl: process.env.GRAPHQL_URL || 'https://default-url.com'
    }
  }
})