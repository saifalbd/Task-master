import './bootstrap';


import {createApp} from 'vue';
import router from './routes';
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import { createPinia } from 'pinia'

import App from './App.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


const app = createApp(App);
app.use(router)
app.use(createPinia())
app.use(createVuestic())
app.component('QuillEditor', QuillEditor)
app.mount("#app");