<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onLoginClick = () => {
  router.push('/login')
}
</script>

<template>
  <div class="app-page">
    <h2>Welcome to Lemon Bank</h2>

    <button type="button" @click="onLoginClick">Log in to your account</button>
  </div>
</template>