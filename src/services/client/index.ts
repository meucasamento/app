import axios, { AxiosInstance } from 'axios'

export type Data = {
    headers?: any;
    params?: any
}

export type Method = "post" | "put" | "get" | "delete" | "patch"

export interface ClientInterface {
    request<T>(url: string, method: Method, data?: Data): Promise<T>
}

export class Client implements ClientInterface {
    
    private instance: AxiosInstance
    private logger = new Logger()

    constructor(baseURL: string) {
        this.instance = axios.create({ baseURL })
        
        this.instance.interceptors.request.use(config => {
            this.logger.request(config)
            return config
        }, err => {
            this.logger.error(err, "request")
            return Promise.reject(err)
        })

        this.instance.interceptors.response.use(config => {
            this.logger.response(config)
            return config
        }, err => {
            this.logger.error(err, "response")
            return Promise.reject(err)
        })
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

class Logger {

    request = (data: any) => {
        console.log('')
        console.log(`######### REQUEST #########`)
        {data.status && console.log(`STATUS: ${data.status}`)}
        console.log(`URL: ${data.baseURL}`)
        console.log(`METHOD: ${data.method}`)
        console.log(`HEADERS: ${JSON.stringify(data.headers)}`)
        {data.data && console.log(`DATA: ${JSON.stringify(data.data)}`)}
        console.log(`###########################`)
        console.log('')
    }

    response = (data: any) => {
        console.log(' ')
        console.log(`######### RESPONSE #########`)
        {data.status && console.log(`STATUS: ${data.status}`)}
        console.log(`URL: ${data.config.baseURL}`)
        console.log(`METHOD: ${data.config.method}`)
        console.log(`HEADERS: ${JSON.stringify(data.headers)}`)
        {data.data && console.log(`DATA: ${JSON.stringify(data.data)}`)}
        console.log(`###########################`)
        console.log(' ')
    }

    error = (error: any, type: "request" | "response") => {
        const config = error.config
        const response = error.response

        console.log(' ')
        console.log(`######### ${type.toUpperCase()} #########`)
        console.log(`STATUS: ${error.response.status}`)
        console.log(`URL: ${config.baseURL}`)
        console.log(`METHOD: ${config.method}`)
        console.log(`HEADERS: ${JSON.stringify(config.headers)}`)
        {response.data && console.log(`DATA: ${JSON.stringify(response.data)}`)}
        console.log(`###########################`)
        console.log(' ')
    }

}