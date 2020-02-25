import { SectionListData } from "react-native"

import Guest from "../../../models/guest.model"
import GuestReport from "../../../models/guestReport.model"
import { Pagination, PaginationResult } from "../../../models/response/pagination.response" 

export const SEARCH = '@guest/SEARCH'
export const SEARCH_SUCCESS = '@guest/SEARCH_SUCCESS'
export const SEARCH_FAILURE = '@guest/SEARCH_FAILURE'

export const FETCH = '@guest/FETCH'
export const FETCH_SUCCESS = '@guest/FETCH_SUCCESS'
export const FETCH_FAILURE = '@guest/FETCH_FAILURE'

export const STORE = '@guest/STORE'
export const STORE_SUCCESS = '@guest/STORE_SUCCESS'
export const STORE_FAILURE = '@guest/STORE_FAILURE'

export const UPDATE = '@guest/UPDATE'
export const UPDATE_SUCCESS = '@guest/UPDATE_SUCCESS'
export const UPDATE_FAILURE = '@guest/UPDATE_FAILURE'

export const DELETE = '@guest/DELETE'
export const DELETE_SUCCESS = '@guest/DELETE_SUCCESS'
export const DELETE_FAILURE = '@guest/DELETE_FAILURE'

export interface GuestSection extends SectionListData<Guest> {
    title: string,
    data: Guest[]
}

export interface GuestState {
    error?: Error,
    loading: boolean,
    guests: Guest[],
    pagination: Pagination
    report: GuestReport
}

// Search Types

interface Search {
    type: typeof SEARCH,
    payload: string
}

interface SearchSuccess {
    type: typeof SEARCH_SUCCESS
    payload: PaginationResult<Guest>
}

interface SearchFailure {
    type: typeof SEARCH_FAILURE
    payload: Error
}

export type SearchTypes = Search | SearchSuccess | SearchFailure

// Fetch Types

export interface Fetch {
    type: typeof FETCH,
    payload: {
        page: number,
        limit: number
    }
}

interface FetchSuccess {
    type: typeof FETCH_SUCCESS
    payload: PaginationResult<Guest>
}

interface FetchhFailure {
    type: typeof FETCH_FAILURE
    payload: Error
}

export type FetchTypes = Fetch | FetchSuccess | FetchhFailure

// Store Types

export interface Store {
    type: typeof STORE,
    payload: Guest
}

export interface StoreSuccess {
    type: typeof STORE_SUCCESS,
    payload: Guest
}

export interface StoreFailure {
    type: typeof STORE_FAILURE,
    payload: Error
}

export type StoreTypes = Store | StoreSuccess | StoreFailure

// Update Types

export interface Update {
    type: typeof UPDATE,
    payload: Guest
}

export interface UpdateSuccess {
    type: typeof UPDATE_SUCCESS,
    payload: Guest
}

export interface UpdateFailure {
    type: typeof UPDATE_FAILURE,
    payload: Error
}

export type UpdateTypes = Update | UpdateSuccess | UpdateFailure

// Remove Types

export interface Delete {
    type: typeof DELETE,
    payload: Guest
}

export interface DeleteSuccess {
    type: typeof DELETE_SUCCESS,
    payload: Guest
}

export interface DeleteFailure {
    type: typeof DELETE_FAILURE,
    payload: Error
}

export type DeleteTypes = Delete | DeleteSuccess | DeleteFailure

// All Types

export type GuestActionsTypes = SearchTypes | FetchTypes | StoreTypes | UpdateTypes | DeleteTypes