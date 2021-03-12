import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import gsap from './plugins/gsap'

const app = createApp(App)

app.use(store)
app.use(VueScrollTo, {
    duration: 500,
    easing: 'ease-in',
    force: false,
    offset: 2
})
app.use(gsap)
app.mount('#app')
