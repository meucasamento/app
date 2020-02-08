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
            Authorization: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5ZDYxMzY4Y2IyODAwMzkyODdkMWIiLCJpYXQiOjE1ODExODQ5NTgsImV4cCI6MTU4MTE4ODU1OH0.weEclvcXveW4p3ZYL7-C2RdqOr4lVz3a1yLDKcuftTKKJYjp_Hdj91CV74fF66eIAqOsI0GdFoKcJXR4fiuc6g"
        }

        return API.request<PaginationResult<Guest>>("guests", "get", { params, headers })
    }

}