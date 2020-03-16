export default class Logger {

    request = (data: any) => {
        console.log(' ')
        console.log(`######### REQUEST #########`)
        console.log(`DATE: ${Date().toString()}`)
        {data.status && console.log(`STATUS: ${data.status}`)}
        console.log(`URL: ${data.baseURL}${data.url}`)
        console.log(`METHOD: ${data.method}`)
        console.log(`HEADERS: ${JSON.stringify(data.headers)}`)
        console.log(`DATA: ${JSON.stringify(data.data)}`)
        console.log(`###########################`)
        console.log(' ')
    }

    response = (data: any) => {
        // console.log(' ')
        // console.log(`######### RESPONSE #########`)
        // console.log(`DATE: ${Date().toString()}`)
        // {data.status && console.log(`STATUS: ${data.status}`)}
        // console.log(`URL: ${data.config.baseURL}`)
        // console.log(`METHOD: ${data.config.method}`)
        // console.log(`HEADERS: ${JSON.stringify(data.headers)}`)
        // {data.data && console.log(`DATA: ${JSON.stringify(data.data)}`)}
        // console.log(`###########################`)
        // console.log(' ')
    }

    error = (error: any, type: "request" | "response") => {
        const config = error.config
        const response = error.response

        console.log(' ')
        console.log(`######### ${type.toUpperCase()} #########`)
        console.log(`DATE: ${Date().toString()}`)
        console.log(`STATUS: ${error.response.status}`)
        console.log(`URL: ${config.baseURL}${config.url}`)
        console.log(`METHOD: ${config.method}`)
        console.log(`HEADERS: ${JSON.stringify(config.headers)}`)
        {response.data && console.log(`DATA: ${JSON.stringify(response.data)}`)}
        console.log(`###########################`)
        console.log(' ')
    }

}