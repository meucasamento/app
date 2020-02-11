import * as SecureStore from 'expo-secure-store'

import Authorization from '../../models/authorization.model'

export interface Session {
    start(auth: Authorization, token: string): Promise<void>
    updateToken(token: string): Promise<void>
    updateAuth(auth: Authorization): Promise<void>
    sessionIsValid(): Promise<boolean>
    getToken(): Promise<string>
    getAuthorization(): Promise<Authorization>
    destroy(): Promise<void>
}

class SessionManager implements Session {
    
    private TOKEN_KEY = "token_key"
    private AUTH_KEY = "auth_key"
    
    start = async (auth: Authorization, token: string): Promise<void> => {
        await SecureStore.setItemAsync(this.TOKEN_KEY, token)
        await SecureStore.setItemAsync(this.AUTH_KEY, JSON.stringify(auth))
    }

    updateToken = async (token: string): Promise<void> => {
        await SecureStore.setItemAsync(this.TOKEN_KEY, token)
    }

    updateAuth = async (auth: Authorization): Promise<void> => {
        await SecureStore.setItemAsync(this.AUTH_KEY, JSON.stringify(auth))
    }
    
    sessionIsValid = async (): Promise<boolean> => {
        throw new Error("Method not implemented.");
    }

    getToken = async (): Promise<string> => {
        return SecureStore.getItemAsync(this.TOKEN_KEY)
    }

    getAuthorization = async (): Promise<Authorization> => {
        const data = await SecureStore.getItemAsync(this.AUTH_KEY)
        return JSON.parse(data)
    }
    
    destroy = async (): Promise<void> => {
        await SecureStore.deleteItemAsync(this.AUTH_KEY)
        await SecureStore.deleteItemAsync(this.TOKEN_KEY)
    }

}

export default new SessionManager