import { SectionListData } from "react-native"

export interface Guest {
    id: number
    name: string
    isConfirmed?: boolean
    isGodfather?: boolean
}

export interface GuestReport {
    total: number
    confirmed: number
    unconfirmed: number
    godfathers: number
}

export interface GuestSection extends SectionListData<Guest> {
    title: string,
    data: Guest[]
}

export interface GuestState {
    guests: Guest[],
    sections: GuestSection[],
    report: GuestReport
}

export const FETCH_GUESTS = 'FETCH_GUESTS'
export const SEARCH_GUESTS = 'SEARCH_GUESTS'
export const STORE_GUEST = 'STORE_GUEST'
export const UPDATE_GUEST = 'UPDATE_GUEST'
export const DELETE_GUEST = 'DELETE_GUEST'

interface Fetch {
    type: typeof FETCH_GUESTS
    payload: Guest[]
}

interface Search {
    type: typeof SEARCH_GUESTS
    payload: {
        query?: string,
        guests: Guest[]
    }
}

interface Store {
    type: typeof STORE_GUEST
    payload: Guest
}

interface Update {
    type: typeof UPDATE_GUEST
    payload: Guest
}

interface Delete {
    type: typeof DELETE_GUEST
    payload: Guest
}

export type GuestActionsTypes = Fetch | Search | Store | Update | Delete