import { createApp } from 'vue'
import './style.css'
import App from './pages/App.vue'
import {createPinia} from "pinia";
import {stores} from "./process/store";


const app = createApp(App);
const pinia = createPinia();
pinia.use(stores.userStore)
app.use(pinia);
app.mount('#app');