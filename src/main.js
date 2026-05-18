import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { i18n } from './i18n.js'
import pinia from './pinia.js'
import PrimeVue from 'primevue/config'
import Material from '@primevue/themes/material'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(pinia)
app.use(PrimeVue, { theme: { preset: Material }, ripple: true })
app.component('pv-button', Button)
app.component('pv-card', Card)
app.component('pv-input-text', InputText)
app.mount('#app')