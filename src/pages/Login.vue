<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('Test')
const password = ref('DummyPass123')

const onLoginFormSubmit = () => {
  console.log('form submitted')
  router.push('/home')
}

const testing = () => {
  console.log(window.cdApi)
}
</script>

<template>
  <div id="login-page">
    <form @submit.prevent="onLoginFormSubmit">
    <label for="username">Username:</label><br />
    <input type="text" id="username" name="username" v-model="username" required /><br /><br />

    <label for="password">Password:</label><br />
    <input type="password" id="password" name="password" v-model="password" required /><br /><br />

    <button type="submit">Login</button>
  </form>

  <button @click="testing">Test</button>
  </div>
</template>

<style scoped>
#login-page {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>