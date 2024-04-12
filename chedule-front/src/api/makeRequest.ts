import axios, {AxiosResponse} from "axios";
import {useUserStore} from "../store/user/model/userStore";
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
interface RequestParams {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    data?: Record<string, any>;
    headers?: Record<string, any>;
    params?: Record<string, any>;
}

export const makeRequest = async <T = any>({ method, url, data, headers, params }: RequestParams): Promise<T> =>
{
    try {
        const response: AxiosResponse<T> = await axios({
            method,
            url,
            data,
            headers,
            params,
        });
        return <T>response;
    } catch (error) {
        console.log(error)
        return error
    }
}