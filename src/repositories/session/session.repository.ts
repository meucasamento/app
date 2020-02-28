import Token from "../../models/token.model"
import Authorization from "../../models/authorization.model"
import api from "../../services/api"

export interface SessionRepositoryInterface {
    authentication(auth: Authorization): Promise<Token>
}

export default new class SessionRepository implements SessionRepositoryInterface {

    async authentication(auth: Authorization): Promise<Token> {
        return await api.request<Token>("session/authentication", "post", { body: auth })
    }
    
}