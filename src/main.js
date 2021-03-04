import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueScrollTo from 'vue-scrollto'


const app = createApp(App)

app.use(store)
app.use(VueScrollTo, {
    duration: 500,
    easing: 'ease-in',
    force: false
})
app.config.devtools = true
app.mount('#app')