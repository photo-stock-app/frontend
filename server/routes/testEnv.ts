import {defineEventHandler} from "h3";

export default defineEventHandler((event) => {
    const graphqlUrl = process.env.GRAPHQL_URL;

    return {
        graphqlUrl: `${graphqlUrl}`
    };
});