import Guest from "../../models/guest.model";
import API from './../../utils/api'
import PaginationResult from "../../models/response/paginationResult.interface";

export interface GuestRepositoryInterface {
    guests(page: number): Promise<PaginationResult<Guest>>
}

export default new class GuestRepository implements GuestRepositoryInterface {
    
    async guests(page: number = 1): Promise<PaginationResult<Guest>> {
        const params = {
            limit: 100
        }

        const headers = {
            Authorization: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5ZDYxMzY4Y2IyODAwMzkyODdkMWIiLCJpYXQiOjE1ODExNzU5NDksImV4cCI6MTU4MTE3OTU0OX0.U8Kb-dmH3d8wTQyiVYA_gwpz4o5nYRxcWjFoFiXw2gPdM26lt_a_9IBnP7qeBDtCf9HLtixiAD7eiJmVGvdlhA"
        }

        return API.request<PaginationResult<Guest>>("guests", "get", { params, headers })
    }

}