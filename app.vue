<template>
  <div>

    test!!:e4r4


    <span v-if="graphqlUrl">{{ graphqlUrl }}</span>
    <span v-else>Loading...</span>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const config = useRuntimeConfig()
let graphqlUrl = config.public.graphqlUrl

onMounted(() => {
  // Дополнительная проверка на случай, если значение не загрузилось
  if (!graphqlUrl) {
    graphqlUrl = config.public.graphqlUrl;
  }
})
</script>