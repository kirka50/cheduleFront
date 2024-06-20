import {defineStore} from "pinia";
import User from "../../../models/user/userType";
import {computed, ref, watch} from "vue";
import Cookies from 'js-cookie'

type Token = String
const STATE_NAME: String = 'user'
interface userName {
    userFirstName: string,
    userSecondName: string,
}

export const useUserStore = defineStore(STATE_NAME, () => {
    const user = ref<User>({
        id: '',
        userToken: '',
        userEmail: '',
        userLogin: '',
        userFirstName: '',
        userSecondName: '',
    })
    const userInCookies = Cookies.get(STATE_NAME)
    if (userInCookies) {
        user.value.id = JSON.parse(userInCookies)._value.id
        user.value.userToken = JSON.parse(userInCookies)._value.userToken
        user.value.userFirstName = JSON.parse(userInCookies)._value.userFirstName
        user.value.userSecondName = JSON.parse(userInCookies)._value.userSecondName
    }

    const isUserAuth = computed(():Boolean => {
        console.log('teku', user.value.userToken)
        return user.value.userToken !== '';
    })

    const setUser = (newUser) => {
        user.value.userToken = newUser.userToken
        user.value.id = newUser.id
        user.value.userEmail = newUser.userEmail
        user.value.userLogin = newUser.userLogin
    }
    const setUserName = (newUser: userName) => {
        user.value.userFirstName = newUser.userFirstName
        user.value.userSecondName = newUser.userSecondName
    }
    const getUser = computed(() => {
        return user.value
    })
    const removeUser = () => {
        user.value.userToken = ''
        user.value.id = ''
        user.value.userLogin = ''
        user.value.userEmail = ''
    }
    const updateToken = (token: Token) => {
        user.value.userToken = token
    }
    watch(() => user, (state) => {
        Cookies.set(STATE_NAME, JSON.stringify(state), {
            expires: 1
        })
    }, {deep: true})
    return {
        user,
        getUser,
        isUserAuth,
        removeUser,
        updateToken,
        setUser,
        setUserName
    }
})