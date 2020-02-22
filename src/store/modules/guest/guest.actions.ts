import { 
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    FETCH,
    GuestActionsTypes,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from './guest.types'

import Guest from '../../../models/guest.model'
import { PaginationResult } from '../../../models/response/pagination.response'

// SEARCH

// export const search = (query: string): GuestActionsTypes => ({
//     type: SEARCH,
//     payload: query
// })

// export const searchSuccess = (result: Pagination<Guest>): GuestActionsTypes => ({
//     type: SEARCH_SUCCESS,
//     payload: result
// })

// export const searchFailure = (error: Error): GuestActionsTypes => ({
//     type: SEARCH_FAILURE,
//     payload: error
// })

// FETCH

export const fetch = (page: number, limit: number = 10): GuestActionsTypes => ({
    type: FETCH,
    payload: { page, limit }
})

export const fetchSuccess = (result: PaginationResult<Guest>): GuestActionsTypes => ({
    type: FETCH_SUCCESS,
    payload: result
})

export const fetchFailure = (error: Error): GuestActionsTypes => ({
    type: FETCH_FAILURE,
    payload: error
})