const ActionLoggerMiddleware = (store: any) => (next: (arg: any) => void) => (action: any) => {
    console.log(" ")
    console.log("########### ACTION LOGGER ###########")
    console.log(action)
    console.log("######### END ACTION LOGGER #########")
    console.log(" ")
    
    next(action)
}

export default ActionLoggerMiddleware