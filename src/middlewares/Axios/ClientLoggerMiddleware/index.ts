import { AxiosInstance } from 'axios'
import ClientInterceptor from "../../../services/client"
import Logger from '../../../utils/Logger';

export default new class ClientLogger implements ClientInterceptor {
    
    private logger = new Logger()

    register(instance: AxiosInstance): void {
        instance.interceptors.request.use(config => {
            this.logger.request(config)
            return config
        }, err => {
            this.logger.error(err, "request")
            return Promise.reject(err)
        })

        instance.interceptors.response.use(config => {
            // this.logger.response(config)
            return config
        }, err => {
            this.logger.error(err, "response")
            return Promise.reject(err)
        })
    }

}