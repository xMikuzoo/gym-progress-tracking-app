import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { router } from './router/'

const pinia = createPinia()
const app = createApp(App)

const initApp = async () => {
	app.use(pinia)
	app.use(router)
	app.mount('#app')
}

initApp()
