import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VeeValidatePlugin from './includes/validation'

const app = createApp(App)
const pinia = createPinia()

library.add([faUser, faXmark])
app.use(router)
app.use(pinia)
app.use(VeeValidatePlugin)
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
