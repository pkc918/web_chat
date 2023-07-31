import { CreateAxiosDefaults } from "axios";

const baseURL =
    import.meta.env.VITE_APP_BASE_URL + import.meta.env.VITE_APP_API_PREFIX;

export const config: CreateAxiosDefaults = {
    baseURL: baseURL,
    timeout: 5000,
    timeoutErrorMessage: "Timeout error",
    withCredentials: false,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
};

// 请求拦截器
export const requestInterceptorFn = <T>(config: T): T => {
    return config;
};

// 请求错误拦截
export const requestError = <T>(error: T): Promise<T> => {
    return Promise.reject(error);
};

// 响应拦截器
export const responseInterceptorFn = <T>(response: T): T => {
    return response;
};

// 响应错误拦截
export const responseError = <T>(error: T): Promise<T> => {
    console.log(error);
    return Promise.reject(error);
};
