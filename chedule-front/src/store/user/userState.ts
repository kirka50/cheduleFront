import {defineStore} from "pinia";
import User from "../models/user/userModel";

export const userStore = defineStore('user', {
    state: (): User => ({
        id: '',
        userToken: '',
        eblan: 'asd'
    }),
});