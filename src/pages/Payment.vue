<script setup lang="ts">
import { ref } from 'vue'
import { getUserActivityScore } from '../api.ts'

const paymentMade = ref(false)
const paymentError = ref(false)
const amount = ref('0.0')
const lastPaymentAmount = ref('0.0')
const paymentLoading = ref(false)

const onPaymentClick = async () => {
  paymentMade.value = false
  paymentError.value = false
  paymentLoading.value = true
  const custSessionId = sessionStorage.getItem('custSessionId') 
  
  if (custSessionId) {
    const uuid = Math.random().toString(36).slice(2, 10)
    await getUserActivityScore(custSessionId, uuid).then(() => {
      paymentMade.value = true
      lastPaymentAmount.value = amount.value
      amount.value = '0.0'
    }).catch(() => {
      paymentError.value = true
    }).finally(() => {
      paymentLoading.value = false
    })
  }
  
}
</script>

<template>
  <div class="app-page payment-page">
      <h2>Payment</h2>

      <label for="amount">Amount to pay</label>
      <span>$<input id="amount" name="amount" type="text" v-model="amount" /></span>
      <button :disabled="paymentLoading" @click="onPaymentClick">
        {{ paymentLoading ? 'Sending Payment' : 'Make Payment' }}
      </button>

      <p v-if="paymentMade">Payment of ${{ lastPaymentAmount }} successful.</p>
      <p v-if="paymentError">There was an error making your payment. Please try again.</p>
  </div>
</template>

<style scoped>
.payment-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input {
  max-width: 150px;
}
</style>