import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import LoginView from './pages/Login.vue'
import AccountView from './pages/AccountOverview.vue'
import Payment from './pages/Payment.vue'
import LandingPage from './pages/LandingPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/home', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/account', component: AccountView },
  { path: '/payment', component: Payment },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
