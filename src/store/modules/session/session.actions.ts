import { 
    AUTHENTICATION,
    LOGOUT,
    SessionActionTypes,
    Credentials
} from './session.types'

export const authentication = (credentials: Credentials, responseHandler: (response: Promise<void>) => void): SessionActionTypes => ({
    type: AUTHENTICATION,
    payload: credentials,
    responseHandler
})

export const logout = (responseHandler: (response: Promise<void>) => void): SessionActionTypes => ({
    type: LOGOUT,
    responseHandler
})