<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const showNav = computed(() => {
    return route?.meta?.showNav || false
  })

  import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar v-if="showNav" />

  <RouterView />
</template>

<style scoped>

</style>
