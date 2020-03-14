import Guest from "../../models/guest.model";
import api from '../../services/api'
import { PaginationResult } from "../../models/response/pagination.response";
import sessionMananger, { Session } from "../../utils/SessionMananger";

export interface GuestRepositoryInterface {
    fetch(page: number, limit: number): Promise<PaginationResult<Guest>>
    store(guest: Guest): Promise<Guest>
    update(guest: Guest): Promise<Guest>
    delete(guest: Guest): Promise<void>
}

class GuestRepository implements GuestRepositoryInterface {
    
    private session: Session

    constructor(session: Session = sessionMananger) {
        this.session = session
    }

    fetch = async (page: number = 1, limit: number = 20): Promise<PaginationResult<Guest>> => {
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

        return await api.request<Guest>("guests", "post", { body: guest, headers })
    }
    
    update = async (guest: Guest): Promise<Guest> => {
        const headers = {
            authorization: await this.session.getToken()
        }

        return await api.request<Guest>(`guests/${guest._id}`, "patch", { body: guest, headers })
    }

    delete = async (guest: Guest): Promise<void> => {
        const { token } = await await this.session.getToken()

        const headers = {
            authorization: token
        }

        return await api.request(`guests/${guest._id}`, "delete", { headers })
    }

}

export default new GuestRepository