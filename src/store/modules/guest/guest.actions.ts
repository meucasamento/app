import {
    FETCH,
    GuestActionsTypes,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    DELETE,
    DELETE_SUCCESS,
    DELETE_FAILURE,
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

// DELETE

export const remove = (guest: Guest): GuestActionsTypes => ({
    type: DELETE,
    payload: guest
})

export const removeSuccess = (guest: Guest): GuestActionsTypes => ({
    type: DELETE_SUCCESS,
    payload: guest
})

export const removeFailure = (error: Error): GuestActionsTypes => ({
    type: DELETE_FAILURE,
    payload: error
})