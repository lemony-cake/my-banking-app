<script setup lang="ts">
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router'

    interface Props {
        isAuth: boolean
    }
    const props = defineProps<Props>()

    const onLogout = async () => {
        // Set a new session id on logout
        const sessionId = Math.random().toString(36).slice(2, 10)
        await window.cdApi?.setCustomerSessionId(sessionId)
    }

    const homeLink = computed(() => {
        if (props.isAuth) return '/home'
        return '/'
    })
</script>

<template>
  <nav id="nav-bar">
    <RouterLink :to="homeLink" class="nav-link"><img src="../assets/lemon.svg" id="lemon-logo" /></RouterLink>
    <RouterLink v-if="!isAuth" to="/login" class="nav-link">Login</RouterLink>

    <RouterLink v-if="isAuth" to="/home" class="nav-link">Home</RouterLink>
    <RouterLink v-if="isAuth" to="/payment" class="nav-link">Payment</RouterLink>
    <RouterLink v-if="isAuth" to="/account" class="nav-link">Account</RouterLink>

    <RouterLink v-if="isAuth" to="/" class="nav-link nav-link-logout" @click="onLogout">Logout</RouterLink>
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