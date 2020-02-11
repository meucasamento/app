import { 
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    GuestActionsTypes,
} from './guest.types'

import Guest from '../../../models/guest.model'
import Pagination from '../../../models/response/pagination.response'

export const search = (query: string): GuestActionsTypes => ({
    type: SEARCH,
    payload: query
})

export const searchSuccess = (result: Pagination<Guest>): GuestActionsTypes => ({
    type: SEARCH_SUCCESS,
    payload: result
})

export const searchFailure = (error: Error): GuestActionsTypes => ({
    type: SEARCH_FAILURE,
    payload: error
})


// export function store(guest: Guest): GuestActionsTypes {
//     return {
//         type: STORE,
//         payload: guest
//     }
// }

// export function update(guest: Guest, status: boolean): GuestActionsTypes {
//     guest.isConfirmed = status

//     return {
//         type: UPDATE,
//         payload: guest
//     }
// }

// export function remove(guest: Guest): GuestActionsTypes {
//     return {
//         type: REMOVE,
//         payload: guest
//     }
// }