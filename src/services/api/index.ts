import { Client } from './client'
import { ClientLogger } from '../../middlewares/ClientLogger'

const api = new Client("https://api-casamento-jenifereadriano.herokuapp.com/api/v1/")

api.register(new ClientLogger())

export default api