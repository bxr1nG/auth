import type { AxiosRequestConfig } from "axios";

import axios from "axios";

const RequestBuilder = (baseURL: string) => {
    const instance = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json"
        }
    });

    return {
        get: <TData>(path: string) => {
            return async (config?: AxiosRequestConfig<any>) => {
                const response = await instance.get(path, config);
                return response.data as TData;
            };
        },
        post: <TValues, TData>(path: string) => {
            return async (values?: TValues) => {
                const response = await instance.post(path, values);
                return response.data as TData;
            };
        }
    };
};

export default RequestBuilder;
