import {defineStore} from "pinia";
import User from "../../../entities/models/user/userModel";

export const userStore = defineStore('user', {
    state: (): User => ({
        id: '',
        userToken: '',
    }),
});