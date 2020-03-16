import { Client } from '../client'
import ClientLogger from '../../middlewares/Axios/ClientLoggerMiddleware'
import RevalidateSession from '../../middlewares/Axios/RevalidateSessionMiddleware'
import AuthorizationMiddleware from '../../middlewares/Axios/AuthorizationMiddleware'

const api = new Client("https://api-casamento-jenifereadriano.herokuapp.com/api/v1/")

api.register([
    ClientLogger, 
    AuthorizationMiddleware,
    RevalidateSession
])

export default api