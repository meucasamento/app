import Authorization from "../../../models/authorization.model"
import Token from "../../../models/token.model"

export const AUTHENTICATION = '@session/AUTHENTICATION'
export const AUTHENTICATION_SUCCESS = '@session/AUTHENTICATION_SUCCESS'
export const AUTHENTICATION_FAILURE = '@session/AUTHENTICATION_FAILURE'

export const LOGOUT = '@session/LOGOUT'
export const LOGOUT_SUCCESS = '@session/LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = '@session/LOGOUT_FAILURE'

export interface SessionState {
    error?: Error,
    userIsLogged: boolean,
    loading: boolean
}

// Authentication

export interface Authentication {
    type: typeof AUTHENTICATION,
    payload: Authorization
}

export interface AuthenticationSuccess {
    type: typeof AUTHENTICATION_SUCCESS,
    payload: Token
}

export interface AuthenticationFailure {
    type: typeof AUTHENTICATION_FAILURE,
    payload: Error
}

export type AuthenticationActionTypes = Authentication | AuthenticationSuccess | AuthenticationFailure

// Logout

export interface Logout {
    type: typeof LOGOUT
}

export interface LogoutSucess {
    type: typeof LOGOUT_SUCCESS
}

export interface LogoutFailure {
    type: typeof LOGOUT_FAILURE,
    payload: Error
}

export type LogoutActionTypes = Logout | LogoutSucess | LogoutFailure

export type SessionActionTypes = AuthenticationActionTypes | LogoutActionTypes