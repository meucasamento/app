import SecureStore from 'expo-secure-store'

import Authorization from '../../models/authorization'

export interface Session {
    start(auth: Authorization, token: string): Promise<void>
    updateToken(token: string): Promise<void>
    updateAuth(auth: Authorization): Promise<void>
    sessionIsValid(): Promise<boolean>
    sessionToken(): Promise<string>
    destroy(): Promise<void>
}

export default class SessionManager implements Session {
    
    private TOKEN = "token"
    private AUTH = "authentication"
    
    async start(auth: Authorization, token: string): Promise<void> {
        await SecureStore.setItemAsync(this.AUTH, JSON.stringify(auth))
        await SecureStore.setItemAsync(this.TOKEN, token)
    }

    async updateToken(token: string): Promise<void> {
        await SecureStore.setItemAsync(this.TOKEN, token)
    }

    async updateAuth(auth: Authorization): Promise<void> {
        await SecureStore.setItemAsync(this.AUTH, JSON.stringify(auth))
    }
    
    async sessionIsValid(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async sessionToken(): Promise<string> {
        return await SecureStore.getItemAsync(this.TOKEN)
    }
    
    async destroy(): Promise<void> {
        await SecureStore.deleteItemAsync(this.AUTH)
        await SecureStore.deleteItemAsync(this.TOKEN)
    }

}