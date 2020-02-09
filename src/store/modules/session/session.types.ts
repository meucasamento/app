import Authorization from "../../../models/authorization.model"
import Token from "../../../models/token.model"

export const AUTHENTICATION = '@session/AUTHENTICATION'
export const AUTHENTICATION_SUCCESS = '@session/AUTHENTICATION_SUCCESS'
export const AUTHENTICATION_FAILURE = '@session/AUTHENTICATION_FAILURE'
export const LOGOUT = '@session/LOGOUT'

export interface SessionState {
    error?: Error,
    loading: boolean
}

// Authentication

interface Authentication {
    type: typeof AUTHENTICATION,
    payload: Authorization
}

interface AuthenticationSuccess {
    type: typeof AUTHENTICATION_SUCCESS,
    payload: Token
}

interface AuthenticationFailure {
    type: typeof AUTHENTICATION_FAILURE,
    payload: Error
}

type AuthenticationTypes = Authentication | AuthenticationSuccess | AuthenticationFailure

// Logout

interface Logout {
    type: typeof LOGOUT
}

export type SessionActionTypes = Logout | AuthenticationTypes