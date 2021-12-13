import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const instance = createApp(App)
instance.use(router)
instance.use(store)
instance.mount('#app')
