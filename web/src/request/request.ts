import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";
import {
    config,
    requestError,
    requestInterceptorFn,
    responseError,
    responseInterceptorFn,
} from "./config";

const instance: AxiosInstance = axios.create(config);

// 请求拦截
instance.interceptors.request.use(
    (config) => requestInterceptorFn<InternalAxiosRequestConfig>(config),
    (error) => requestError(error)
);

// 响应拦截
instance.interceptors.response.use(
    (response) => responseInterceptorFn<AxiosResponse>(response),
    (error) => responseError(error)
);

export const request = (option: AxiosRequestConfig) => {
    return instance(option);
};

export const GET = async <T = unknown>(
    url: string,
    config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
    const res = await instance.get<T>(url, config);
    return res;
};

export const POST = async <T = unknown>(
    url: string,
    config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
    const res = await instance.post<T>(url, config);
    return res;
};
