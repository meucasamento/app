export const AUTHENTICATION = '@session/AUTHENTICATION'
export const LOGOUT = '@session/LOGOUT'

export type SessionState = {}

export type Credentials = {
    email: string,
    password: string
}

export type AuthenticationActionType = {
    type: typeof AUTHENTICATION,
    payload: Credentials,
    completion: (response: Promise<void>) => void
}

export type LogoutActionType = {
    type: typeof LOGOUT,
    completion: (response: Promise<void>) => void
}

export type SessionActionTypes = AuthenticationActionType | LogoutActionType