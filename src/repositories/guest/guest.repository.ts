import Guest from "../../models/guest.model";
import api from '../../services/api'
import { PaginationResult } from "../../models/response/pagination.response";

export interface GuestRepositoryInterface {
    fetch(page: number, limit: number): Promise<PaginationResult<Guest>>
    store(guest: Guest): Promise<Guest>
    update(guest: Guest): Promise<Guest>
    delete(guest: Guest): Promise<void>
}

class GuestRepository implements GuestRepositoryInterface {
    
    fetch = async (page: number = 1, limit: number = 20): Promise<PaginationResult<Guest>> => {
        const params = {
            page,
            limit
        }

        return await api.request<PaginationResult<Guest>>("guests", "get", { params })
    }

    store = async (guest: Guest): Promise<Guest> => {
        return await api.request<Guest>("guests", "post", { body: guest })
    }
    
    update = async (guest: Guest): Promise<Guest> => {
        return await api.request<Guest>(`guests/${guest._id}`, "patch", { body: guest })
    }

    delete = async (guest: Guest): Promise<void> => {
        return await api.request(`guests/${guest._id}`, "delete")
    }

}

export default new GuestRepository