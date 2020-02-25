import {
    FETCH,
    GuestActionsTypes,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from './guest.types'

import Guest from '../../../models/guest.model'
import { PaginationResult } from '../../../models/response/pagination.response'

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