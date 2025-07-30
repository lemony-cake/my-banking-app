<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onLoginClick = () => {
  router.push('/login')
}
</script>

<template>
  <div>
    Welcome to Lemon Bank

    <button type="button" @click="onLoginClick">Login</button>
  </div>
</template>