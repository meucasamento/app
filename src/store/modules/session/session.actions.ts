import { 
    AUTHENTICATION,
    LOGOUT,
    SessionActionTypes,
    Credentials
} from './session.types'

export const authentication = (credentials: Credentials, completion: (response: Promise<void>) => void): SessionActionTypes => ({
    type: AUTHENTICATION,
    payload: credentials,
    completion
})

export const logout = (completion: (response: Promise<void>) => void): SessionActionTypes => ({
    type: LOGOUT,
    completion
})