import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faClipboardList,
  faChartLine,
  faBriefcase,
  faGauge,
  faChalkboardTeacher,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faClipboardList,
  faChartLine,
  faBriefcase,
  faGauge,
  faChalkboardTeacher,
  faUserShield,
)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
