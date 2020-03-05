import {
    FETCH,
    FETCH_SUCCESS,
    DELETE,
    DELETE_SUCCESS,
    STORE,
    STORE_SUCCESS,
    UPDATE,
    UPDATE_SUCCESS,
    GuestActionsTypes,
} from './guest.types'

import Guest from '../../../models/guest.model'
import { PaginationResult } from '../../../models/response/pagination.response'

// FETCH

export const fetch = (page: number, limit: number = 10, completion?: (response: Promise<void>) => void): GuestActionsTypes => ({
    type: FETCH,
    payload: { page, limit },
    completion
})

export const fetchSuccess = (result: PaginationResult<Guest>): GuestActionsTypes => ({
    type: FETCH_SUCCESS,
    payload: result
})

// STORE

export const store = (guest: Guest, completion: (response: Promise<void>) => void): GuestActionsTypes => ({
    type: STORE,
    payload: guest,
    completion
})

export const storeSuccess = (guest: Guest): GuestActionsTypes => ({
    type: STORE_SUCCESS,
    payload: guest
})

// UPDATE

export const update = (guest: Guest, completion: (response: Promise<void>) => void): GuestActionsTypes => ({
    type: UPDATE,
    payload: guest,
    completion
})

export const updateSuccess = (guest: Guest): GuestActionsTypes => ({
    type: UPDATE_SUCCESS,
    payload: guest
})

// DELETE

export const remove = (guest: Guest, completion: (response: Promise<void>) => void): GuestActionsTypes => ({
    type: DELETE,
    payload: guest,
    completion
})

export const removeSuccess = (guest: Guest): GuestActionsTypes => ({
    type: DELETE_SUCCESS,
    payload: guest
})