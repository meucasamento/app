import Guest from "../../models/guest.model";
import api from '../../services/api'
import Pagination from "../../models/response/pagination.response";
import sessionMananger, { Session } from "../../utils/sessionMananger";

export interface GuestRepositoryInterface {
    guests(page: number, limit: number): Promise<Pagination<Guest>>
}

class GuestRepository implements GuestRepositoryInterface {
    
    private session: Session

    constructor(session: Session = sessionMananger) {
        this.session = session
    }

    guests = async (page: number = 1, limit: number): Promise<Pagination<Guest>> => {
        const params = {
            page,
            limit
        }

        const headers = {
            authorization: await this.session.getToken()
        }

        return await api.request<Pagination<Guest>>("guests", "get", { params, headers })
    }

}

export default new GuestRepository