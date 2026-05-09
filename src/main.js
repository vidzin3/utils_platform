import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router';
import { Icon } from '@iconify/vue/dist/iconify.js';

import "@/@iconify/icons-bundle";
import "@/assets/font.css";
import "@/assets/base.css";
import "@/assets/global.css";

const app = createApp(App)

app.use(router)
app.component('Icon', Icon)

app.mount('#app')
