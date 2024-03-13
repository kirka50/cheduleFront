import { createApp } from 'vue'
import './style.css'
import App from './pages/App.vue'
import {createPinia} from "pinia";
import {stores} from "./process/store";
import router from "./app/router";



const app = createApp(App);
const pinia = createPinia();
pinia.use(stores.userStore)
app.use(router)
app.use(pinia);
app.mount('#app');