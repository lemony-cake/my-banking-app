<script setup lang="ts">
    import {RouterLink} from 'vue-router'

    const onLogout = async () => {
        // Set a new session id on logout
        const sessionId = Math.random().toString(36).slice(2, 10)
        await window.cdApi?.setCustomerSessionId(sessionId)
    }
</script>

<template>
  <nav id="nav-bar">
    <RouterLink to="/home" class="nav-link"><img src="../assets/lemon.svg" id="lemon-logo" /></RouterLink>
    
    <RouterLink to="/home" class="nav-link">Home</RouterLink>
    <RouterLink to="/payment" class="nav-link">Payment</RouterLink>
    <RouterLink to="/account" class="nav-link">Account</RouterLink>

    <RouterLink to="/" class="nav-link nav-link-logout" @click="onLogout">Logout</RouterLink>
  </nav>
</template>

<style scoped>

#nav-bar {
    padding: 12px;
    background: rgb(248, 248, 223);
    display: flex;
    align-items: center;
}

#lemon-logo {
    width: 40px;
    height: 40px;
}

.nav-link {
    color: black;
    font-weight: 500;
    padding: 0 12px;
}
.nav-link-logout {
    margin-left: auto;
}
</style>