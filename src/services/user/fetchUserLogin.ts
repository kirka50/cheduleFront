
import {makeRequest} from "../../api/makeRequest";


export const fetchUserLogin = async (username:string, password:string) => {
    return await makeRequest({
        method: "POST",
        url:'auth/token/login/',
        data: {
            username,
            password
        }
    })
}