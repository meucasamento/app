const AuthenticationMiddleware = (store: any) => (next: (arg: any) => void) => (action: any) => {
    // console.log(action)
    
    next(action)
}

export default AuthenticationMiddleware