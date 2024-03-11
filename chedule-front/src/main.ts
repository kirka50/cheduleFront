import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerUserStore } from './store'
import {createPinia} from "pinia";


const app = createApp(App);
const pinia = createPinia();
registerUserStore(pinia)
app.use(pinia);
app.mount('#app');