import { SectionListData } from "react-native"

import Guest from "../../../models/guest.model"
import GuestReport from "../../../models/guestReport.model"
import { Pagination, PaginationResult } from "../../../models/response/pagination.response" 

export const FETCH = '@guest/FETCH'
export const FETCH_SUCCESS = '@guest/FETCH_SUCCESS'

export const STORE = '@guest/STORE'
export const STORE_SUCCESS = '@guest/STORE_SUCCESS'

export const UPDATE = '@guest/UPDATE'
export const UPDATE_SUCCESS = '@guest/UPDATE_SUCCESS'

export const DELETE = '@guest/DELETE'
export const DELETE_SUCCESS = '@guest/DELETE_SUCCESS'

export interface GuestSection extends SectionListData<Guest> {
    title: string,
    data: Guest[]
}

export interface GuestState {
    guests: Guest[],
    pagination: Pagination,
    report: GuestReport
}

// Fetch Types

export interface Fetch {
    type: typeof FETCH,
    payload: {
        page: number,
        limit: number
    },
    completion: (response: Promise<void>) => void
}

interface FetchSuccess {
    type: typeof FETCH_SUCCESS
    payload: PaginationResult<Guest>
}

export type FetchTypes = Fetch | FetchSuccess

// Store Types

export interface Store {
    type: typeof STORE,
    payload: Guest,
    completion: (response: Promise<void>) => void
}

export interface StoreSuccess {
    type: typeof STORE_SUCCESS,
    payload: Guest
}

export type StoreTypes = Store | StoreSuccess

// Update Types

export interface Update {
    type: typeof UPDATE,
    payload: Guest,
    completion: (response: Promise<void>) => void
}

export interface UpdateSuccess {
    type: typeof UPDATE_SUCCESS,
    payload: Guest
}

export type UpdateTypes = Update | UpdateSuccess

// Remove Types

export interface Delete {
    type: typeof DELETE,
    payload: Guest,
    completion: (response: Promise<void>) => void
}

export interface DeleteSuccess {
    type: typeof DELETE_SUCCESS,
    payload: Guest
}

export type DeleteTypes = Delete | DeleteSuccess

// All Types

export type GuestActionsTypes = FetchTypes | StoreTypes | UpdateTypes | DeleteTypes