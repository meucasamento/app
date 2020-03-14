import * as SecureStore from 'expo-secure-store'
import { Credentials } from '../../store/modules/session/session.types'
import Token from '../../models/token.model'

export interface Session {
    start(credentials: Credentials, token: Token): Promise<void>
    updateToken(token: string): Promise<void>
    updateAuth(credentials: Credentials): Promise<void>
    sessionIsValid(): Promise<boolean>
    getToken(): Promise<Token>
    getAuthorization(): Promise<Credentials>
    destroy(): Promise<void>
}

class SessionManager implements Session {
    
    private TOKEN_KEY = "token_key"
    private TOKEN_CREATED_KEY = "token_created_key"
    private AUTH_KEY = "auth_key"

    start = async (credentials: Credentials, token: Token): Promise<void> => {
        await SecureStore.setItemAsync(this.TOKEN_KEY, JSON.stringify(token))
        await SecureStore.setItemAsync(this.TOKEN_CREATED_KEY, Date.now().toString())
        await SecureStore.setItemAsync(this.AUTH_KEY, JSON.stringify(credentials))
    }

    updateToken = async (token: string): Promise<void> => {
        await SecureStore.setItemAsync(this.TOKEN_KEY, token)
    }

    updateAuth = async (credentials: Credentials): Promise<void> => {
        await SecureStore.setItemAsync(this.AUTH_KEY, JSON.stringify(credentials))
    }
    
    sessionIsValid = async (): Promise<boolean> => {
        throw new Error("Method not implemented.");
    }

    getToken = async (): Promise<Token> => {
        const data = await SecureStore.getItemAsync(this.TOKEN_KEY)
        return JSON.parse(data)
    }

    getAuthorization = async (): Promise<Credentials> => {
        const data = await SecureStore.getItemAsync(this.AUTH_KEY)
        return JSON.parse(data)
    }
    
    destroy = async (): Promise<void> => {
        await SecureStore.deleteItemAsync(this.AUTH_KEY)
        await SecureStore.deleteItemAsync(this.TOKEN_KEY)
    }

}

export default new SessionManager