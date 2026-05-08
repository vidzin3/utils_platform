import { createApp } from 'vue'
import App from './App.vue'

import "@/@iconify/icons-bundle";
import "@/assets/font.css";
import "@/assets/base.css";
import "@/assets/global.css";

import { registerServices } from './core/registerService';
import { registerComponents } from './core/registerComponent';

const app = createApp(App)

registerServices(app)
registerComponents(app)

app.mount('#app')
