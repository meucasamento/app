import { 
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    GuestActionsTypes,
    Guest,
} from './guest.types'

export const search = (query: string): GuestActionsTypes => ({
    type: SEARCH,
    payload: query
})

export const searchSuccess = (guests: Guest[]): GuestActionsTypes => ({
    type: SEARCH_SUCCESS,
    payload: guests
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