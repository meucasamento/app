import { SectionListData } from "react-native"

import Guest from "../../../models/guest.model"
import GuestReport from "../../../models/guestReport.model"
import Pagination from "../../../models/response/pagination.response"

export const SEARCH = '@guest/SEARCH'
export const SEARCH_SUCCESS = '@guest/SEARCH_SUCCESS'
export const SEARCH_FAILURE = '@guest/SEARCH_FAILURE'

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

// Begin Search Types

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

type SearchTypes = Search | SearchSuccess | SearchFailure

interface Store {
    type: typeof STORE
    payload: Guest
}

interface Update {
    type: typeof UPDATE
    payload: Guest
}

interface Remove {
    type: typeof REMOVE
    payload: Guest
}

export type GuestActionsTypes = SearchTypes | Store | Update | Remove