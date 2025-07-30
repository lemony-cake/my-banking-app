<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const isAuthenticated = computed(() => {
    return !!route?.meta?.isAuth || false
  })

  import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar :is-auth="isAuthenticated" />

  <RouterView />
</template>