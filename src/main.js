// import './assets/main.css'
import './assets/zuma.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/partials/Header.vue'
import FooterKu from './components/partials/Footer.vue'

const app = createApp(App)

app.component('Header', Header)
app.component('FooterKu', FooterKu)
app.use(router)

app.mount('#app')
