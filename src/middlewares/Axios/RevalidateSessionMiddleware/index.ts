import { AxiosInstance } from 'axios'

import SessionMananger from "../../../utils/SessionMananger"
import ClientInterceptor from "../../../services/client";
import sessionRepository from '../../../repositories/session/session.repository';

export default new class RevalidateSessionMiddleware implements ClientInterceptor {
    
    async register(instance: AxiosInstance): Promise<void> {
        instance.interceptors.request.use(async config => {
            if (config.url.startsWith("session")) { 
                return config 
            }

            try {
                const isValid = await SessionMananger.sessionIsValid()
                
                if (!isValid) {
                    const credentials = await SessionMananger.getCredentials()
                    const token = await sessionRepository.authentication(credentials)
                    await SessionMananger.start(credentials, token)

                    console.log("passando aqui")
                }

                return config
            } catch(err) {
                return Promise.reject(err)
            }
        })
    }
    
}