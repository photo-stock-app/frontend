<template>
  <div>
    test 3443
     {{ graphqlUrl }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const graphqlUrl = config.public.graphqlUrl;
</script>