<script setup lang="ts">
import { getUserActivityScore } from '../api.ts'

const onPaymentClick = async () => {
  const custSessionId = sessionStorage.getItem('custSessionId') 
  
  if (custSessionId) {
    const uuid = Math.random().toString(36).slice(2, 10)
    await getUserActivityScore(custSessionId, uuid)
  }
}
</script>

<template>
  <div class="app-page">
      <h2>Payment</h2>

      <button @click="onPaymentClick">Make payment</button>
  </div>
</template>