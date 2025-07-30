import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import LoginView from './pages/Login.vue'
import AccountView from './pages/AccountOverview.vue'
import Payment from './pages/Payment.vue'
import LandingPage from './pages/LandingPage.vue'


const routes = [
    { 
        path: '/', 
        component: LandingPage, 
        name: 'landing-page',
        meta: { isAuth: false } 
    },
    { 
        path: '/login', 
        component: LoginView, 
        name: 'login-page',
        meta: { isAuth: false }  
    },
    { 
        path: '/home', 
        component: HomeView, 
        name: 'home-page',
        meta: { isAuth: true } 
    },
    { 
        path: '/account', 
        component: AccountView, 
        name: 'account-page',
        meta: { isAuth: true }  
    },
    { 
        path: '/payment', 
        component: Payment, 
        name: 'payment-page',
        meta: { isAuth: true }  
    },
]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach((to) => {
    if (window.cdApi) {
        window.cdApi.changeContext(to.name)
    }
})

export default router