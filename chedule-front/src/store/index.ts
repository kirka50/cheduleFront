import {defineStore} from "pinia";
import { userStore } from "./user/userState";

export const registerUserStore = (pinia) => {
    pinia.use(userStore);
};



