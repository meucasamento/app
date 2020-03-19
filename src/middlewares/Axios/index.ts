import ClientLogger from './ClientLoggerMiddleware'
import RevalidateSession from './RevalidateSessionMiddleware'
import AuthorizationMiddleware from './AuthorizationMiddleware'
import api from '../../services/api'

export const registerAllAxiosMiddlewares = () => {
    api.register([
        ClientLogger,
        RevalidateSession,
        AuthorizationMiddleware
    ])
}

export {
    ClientLogger,
    RevalidateSession,
    AuthorizationMiddleware
}