import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

declare global {
  interface Window {
    cdApi: {
      configurationKeys: {
        wupServerURL: string
        logServerURL: string
        enableCustomElementsProcessing: string
        collectionSettings: string
      }
      setCustomerSessionId: Function
      getConfigurations: Function
      changeContext: Function
      setCustomerBrand: Function
    }
  }
}