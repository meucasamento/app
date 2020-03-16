import { AxiosInstance } from "axios"
import ClientInterceptor from "../../../services/client"
import SessionMananger from "../../../utils/SessionMananger"

export default new class AuthorizationMiddleware implements ClientInterceptor {
    
    register(instance: AxiosInstance): void {
        instance.interceptors.request.use(async config => {
            if (config.url.startsWith('session')) return config

            const {
                token
            } = await SessionMananger.getToken()

            config.headers = {
                ...config.headers,
                authorization: token
            }

            return config
        })
    }

}