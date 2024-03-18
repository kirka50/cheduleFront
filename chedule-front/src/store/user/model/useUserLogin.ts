import {fetchUserLogin} from "./fetchUserLogin";
import {useUserStore} from "./index";
import router from "../../../router";


export function loginUser(login: string, password:string) {
    const userStorage = useUserStore()
    fetchUserLogin(login, password)
        .then(
            response => {
                console.log(response.data)
                userStorage.setUser({userLogin: login, userEmail: '', userToken: response.data.auth_token})
            }
        )
        .catch(
            error => {
                return error
            }
        )
}