import { createApp } from 'vue'
import App from './App.vue'
import { registerServices } from '@/core/registerService.js';
import { registerComponents } from '@/core/registerComponent.js';

import "@/@iconify/icons-bundle";
import "@/assets/font.css";
import "@/assets/base.css";
import "@/assets/global.css";

const app = createApp(App)

registerServices(app)
registerComponents(app)

app.mount('#app')
