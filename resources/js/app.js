import './bootstrap';


import {createApp} from 'vue';
import router from './routes';
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App);
app.use(router)
app.use(createPinia())
app.use(createVuestic())
app.mount("#app");