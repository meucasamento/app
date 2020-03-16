import axios, { AxiosInstance } from 'axios'

import SessionMananger from "../../../utils/SessionMananger"
import ClientInterceptor from "../../../services/client";
import sessionRepository from './../../../repositories/session/session.repository';

export default new class RevalidateSessionMiddleware implements ClientInterceptor {

    async register(instance: AxiosInstance): Promise<void> {
        instance.interceptors.response.use(async config => {
            return config
        }, async err => {
            const status = err?.response?.status ?? null

            if (status === 401) {   
                await this.refreshToken()
                return axios.request(err.config)
            }

            return Promise.reject(err)
        })
    }

    refreshToken = async (): Promise<void> => {
        const credentials = await SessionMananger.getCredentials()
        const token = await sessionRepository.authentication(credentials)
        await SessionMananger.start(credentials, token)
    }
    
}