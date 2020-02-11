import Authorization from '../../../models/authorization.model'
import Token from '../../../models/token.model'

import { 
    SessionActionTypes, 
    AUTHENTICATION,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from './session.types'

export const authentication = (auth: Authorization): SessionActionTypes => ({
    type: AUTHENTICATION,
    payload: auth
})

export const authenticationSuccess = (token: Token): SessionActionTypes => ({
    type: AUTHENTICATION_SUCCESS,
    payload: token
})

export const authenticationFailure = (error: Error): SessionActionTypes => ({
    type: AUTHENTICATION_FAILURE,
    payload: error
})

export const logout = (): SessionActionTypes => ({
    type: LOGOUT
})

export const logoutSuccess = (): SessionActionTypes => ({
    type: LOGOUT_SUCCESS
})

export const logoutFailure = (error: Error): SessionActionTypes => ({
    type: LOGOUT_FAILURE,
    payload: error
})