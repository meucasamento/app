import axios, { AxiosInstance, AxiosStatic } from 'axios'

export type Data = {
    headers?: any;
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

    register(interceptor: ClientInterceptor): void {
        interceptor.register(this.instance)
    }

    async request<T>(url: string, method: Method, data?: Data): Promise<T> {
        const headers = data.headers
        const params = method === ("get" || "delete") ? data.params : null
        const body = method === ("post" || "put" || "patch") ? data.params : null
        
        return this.instance.request<T>({
            url,
            method,
            headers,
            params,
            data: body,
            responseType: "json"
        }).then(response => {
            return response.data as T
        })
    }

}