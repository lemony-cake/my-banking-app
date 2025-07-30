<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { initUserActivity } from '../api.ts'

const router = useRouter()

const username = ref('TestUser')
const password = ref('DummyPass123')

/**
 * 4. Trigger the relevant API requests when the user clicks certain buttons, e.g., "init" when
clicking the Login button, then "getScore" when clicking a Make Payment button.
You can either trigger these API requests from the client-side, or use Postman.
An example to API init request:
URL: https://hooks.zapier.com/hooks/catch/1888053/bgwofce/
method: POST
payload/body:
{
"customerId": "dummy",
"action": "init",
"customerSessionId": "WHAT_YOU_HAVE_SET_IN_THE_CLIENT_SIDE",
"activityType": "LOGIN",
"uuid": "USE_SOME_RANDOM_STRING",
"brand": "SD",
"solution": "ATO",
"iam": "YOUR_EMAIL_ADDRESS_OR_FULL_NAME"
}
 */

const onLoginFormSubmit = async () => {
  await initWupCustomerSession()

  router.push('/home')
}

const initWupCustomerSession = async () => {
  const sessionId = Math.random().toString(36).slice(2, 10)
  const uuid = Math.random().toString(36).slice(2, 10)

  await window.cdApi?.setCustomerSessionId(sessionId)
  await initUserActivity(sessionId, uuid)
  sessionStorage.setItem("custSessionId", sessionId)
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