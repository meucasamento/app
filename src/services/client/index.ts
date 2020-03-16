import axios, { AxiosInstance, AxiosStatic } from 'axios'

export type Data = {
    headers?: any
    body?: any
    params?: any
}

export type Method = "post" | "put" | "get" | "delete" | "patch"

export interface ClientInterface {
    request<T>(url: string, method: Method, data?: Data): Promise<T>
}

export default interface ClientInterceptor {
    register(instance: AxiosInstance): void
}

export class Client implements ClientInterface {
    
    private instance: AxiosInstance

    constructor(baseURL: string) {
        this.instance = axios.create({ baseURL })
    }

    register<T extends ClientInterceptor>(interceptors: T[]): void {
        interceptors.forEach(interceptor => interceptor.register(this.instance))
    }

    async request<T>(url: string, method: Method, data?: Data): Promise<T> {
        return this.instance.request<T>({
            url,
            method,
            headers: data.headers,
            params: data.params,
            data: data.body,
            responseType: "json"
        }).then(response => {
            return response.data as T
        })
    }

}