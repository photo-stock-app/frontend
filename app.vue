<template>
  <div>
    test 3443
     {{ graphqlUrl }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const graphqlUrl = process.env.GRAPHQL_URL;

</script>