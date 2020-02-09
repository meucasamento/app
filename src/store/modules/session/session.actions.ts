import Authorization from '../../../models/authorization.model'
import Token from '../../../models/token.model'

import { 
    SessionActionTypes, 
    AUTHENTICATION,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOGOUT
} from './session.types'

export const authentication = (auth: Authorization): SessionActionTypes => ({
    type: AUTHENTICATION,
    payload: auth
})

export const authenticationSuccess = (token: Token): SessionActionTypes => ({
    type: AUTHENTICATION_SUCCESS,
    payload: token
})

export const authenticationFailed = (error: Error): SessionActionTypes => ({
    type: AUTHENTICATION_FAILURE,
    payload: error
})

export const logout = (): SessionActionTypes => ({
    type: LOGOUT
})