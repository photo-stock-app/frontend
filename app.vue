<template>
  <div>
    test:
    <span v-if="graphqlUrl">{{ graphqlUrl }}</span>
    <span v-else>Loading...</span>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const graphqlUrl = config.public.graphqlUrl;
console.log(graphqlUrl)
</script>
