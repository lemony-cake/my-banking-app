<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="app-page">
      <h2>Welcome back, Bob</h2>

      <RouterLink to="/payment">
        <div class="home-menu-item">
          <span>Make a payment</span>
          <span class="arrow">&rarr;</span>
        </div>
      </RouterLink>
      <RouterLink to="/account">
        <div class="home-menu-item">
          <span>View your accounts</span>
          <span class="arrow">&rarr;</span>
        </div>
      </RouterLink>
  </div>
</template>

<style scoped>
.home-menu-item {
  padding: 24px 32px;
  background: rgb(232, 232, 232);
  border-radius: 8px;
  margin-bottom: 12px;
  color: rgb(51, 69, 14);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  line-height: 32px;
}

.arrow {
  font-size: 30px;
}
</style>