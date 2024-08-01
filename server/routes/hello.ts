export default defineEventHandler((event) => {
    return {
        hello: `graphql_url: ` + process.env.GRAPHQL_URL
    }
})