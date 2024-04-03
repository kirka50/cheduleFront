import {userLoginData} from "../../models/user/userLoginTypes";
import {makeRequest} from "../../api/makeRequest";


export const fetchUserReg = async (username:string, password:string, email:string) => {
    return await makeRequest({
        method: "POST",
        url:'auth/users/',
        data: {
            email,
            username,
            password
        }
    })
}