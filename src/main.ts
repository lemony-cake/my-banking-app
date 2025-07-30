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
  { path: '/', component: LandingPage, meta: { showNav: false } },
  { path: '/login', component: LoginView, meta: { showNav: false }  },
  { path: '/home', component: HomeView, meta: { showNav: true } },
  { path: '/account', component: AccountView, meta: { showNav: true }  },
  { path: '/payment', component: Payment, meta: { showNav: true }  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
