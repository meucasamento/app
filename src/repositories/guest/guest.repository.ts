import Guest from "../../models/guest.model";
import api from '../../services/api'
import { PaginationResult } from "../../models/response/pagination.response";
import sessionMananger, { Session } from "../../utils/sessionMananger";

export interface GuestRepositoryInterface {
    guests(page: number, limit: number): Promise<PaginationResult<Guest>>
    store(guest: Guest): Promise<Guest>
    update(guest: Guest): Promise<Guest>
    delete(guest: Guest): Promise<void>
}

class GuestRepository implements GuestRepositoryInterface {
    
    private session: Session

    constructor(session: Session = sessionMananger) {
        this.session = session
    }

    guests = async (page: number = 1, limit: number = 10): Promise<PaginationResult<Guest>> => {
        const params = {
            page,
            limit
        }

        const headers = {
            authorization: await this.session.getToken()
        }

        return await api.request<PaginationResult<Guest>>("guests", "get", { params, headers })
    }

    store = async (guest: Guest): Promise<Guest> => {
        const headers = {
            authorization: await this.session.getToken()
        }

        return await api.request<Guest>("guest", "post", { params: guest, headers })
    }
    
    update = async (guest: Guest): Promise<Guest> => {
        const headers = {
            authorization: await this.session.getToken()
        }

        return await api.request<Guest>("guest", "patch", { params: guest, headers })
    }

    delete = async (guest: Guest): Promise<void> => {
        const headers = {
            authorization: await this.session.getToken()
        }

        return await api.request("guest", "delete", { params: { id: guest._id }, headers })
    }

}

export default new GuestRepository