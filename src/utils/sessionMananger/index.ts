import * as SecureStore from 'expo-secure-store'
import { Credentials } from '../../store/modules/session/session.types'
import Token from '../../models/token.model'

export interface Session {
    start(credentials: Credentials, token: Token): Promise<void>
    updateToken(token: string): Promise<void>
    updateAuth(credentials: Credentials): Promise<void>
    sessionIsValid(): Promise<boolean>
    getToken(): Promise<Token>
    getTokenCreadtedIn(): Promise<string>
    getCredentials(): Promise<Credentials>
    destroy(): Promise<void>
}

class SessionManager implements Session {
    
    private TOKEN_KEY = "token_key"
    private TOKEN_CREATED_IN_KEY = "token_created_in_key"
    private AUTH_KEY = "auth_key"

    start = async (credentials: Credentials, token: Token): Promise<void> => {
        await SecureStore.setItemAsync(this.TOKEN_KEY, JSON.stringify(token))
        await SecureStore.setItemAsync(this.TOKEN_CREATED_IN_KEY, JSON.stringify(Date.now()))
        await SecureStore.setItemAsync(this.AUTH_KEY, JSON.stringify(credentials))
    }

    updateToken = async (token: string): Promise<void> => {
        await SecureStore.setItemAsync(this.TOKEN_KEY, token)
    }

    updateAuth = async (credentials: Credentials): Promise<void> => {
        await SecureStore.setItemAsync(this.AUTH_KEY, JSON.stringify(credentials))
    }
    
    sessionIsValid = async (): Promise<boolean> => {
        const createdIn = await this.getTokenCreadtedIn()
        const { expiresIn } = await this.getToken()
        const now = Date.now()
        const limit = +createdIn + +expiresIn
        const isValid = now <= limit
        return Promise.resolve(isValid)
    }

    getToken = async (): Promise<Token> => {
        const data = await SecureStore.getItemAsync(this.TOKEN_KEY)
        return JSON.parse(data)
    }

    getTokenCreadtedIn = async (): Promise<string> => {
        return await SecureStore.getItemAsync(this.TOKEN_CREATED_IN_KEY)
    }

    getCredentials = async (): Promise<Credentials> => {
        const data = await SecureStore.getItemAsync(this.AUTH_KEY)
        return JSON.parse(data)
    }
    
    destroy = async (): Promise<void> => {
        await SecureStore.deleteItemAsync(this.AUTH_KEY)
        await SecureStore.deleteItemAsync(this.TOKEN_KEY)
    }

}

export default new SessionManager