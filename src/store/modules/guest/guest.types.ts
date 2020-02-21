import { SectionListData } from "react-native"

import Guest from "../../../models/guest.model"
import GuestReport from "../../../models/guestReport.model"
import Pagination from "../../../models/response/pagination.response"

export const SEARCH = '@guest/SEARCH'
export const SEARCH_SUCCESS = '@guest/SEARCH_SUCCESS'
export const SEARCH_FAILURE = '@guest/SEARCH_FAILURE'

export const FETCH = '@guest/FETCH'
export const FETCH_SUCCESS = '@guest/FETCH_SUCCESS'
export const FETCH_FAILURE = '@guest/FETCH_FAILURE'

export const STORE = '@guest/STORE'
export const UPDATE = '@guest/UPDATE'
export const REMOVE = '@guest/REMOVE'

export interface GuestSection extends SectionListData<Guest> {
    title: string,
    data: Guest[]
}

export interface GuestState {
    error?: Error,
    loading: boolean,
    guests: Guest[],
    sections: GuestSection[],
    report: GuestReport
}

// Search Types

interface Search {
    type: typeof SEARCH,
    payload: string
}

interface SearchSuccess {
    type: typeof SEARCH_SUCCESS
    payload: Pagination<Guest>
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
    payload: Pagination<Guest>
}

interface FetchhFailure {
    type: typeof FETCH_FAILURE
    payload: Error
}

export type FetchTypes = Fetch | FetchSuccess | FetchhFailure

// All Types

export type GuestActionsTypes = SearchTypes | FetchTypes