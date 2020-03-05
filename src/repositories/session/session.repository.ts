import Token from "../../models/token.model"
import api from "../../services/api"
import { Credentials } from "../../store/modules/session/session.types"

export interface SessionRepositoryInterface {
    authentication(credentials: Credentials): Promise<Token>
}

export default new class SessionRepository implements SessionRepositoryInterface {

    async authentication(credentials: Credentials): Promise<Token> {
        const endpoint = "session/authentication"
        const method = "post"
        const data = { body: credentials }
        const request = api.request<Token>(endpoint, method, data)
        return await request
    }
    
}