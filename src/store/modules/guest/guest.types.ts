import { SectionListData } from "react-native"

export const SEARCH_GUESTS = '@guest/SEARCH_GUESTS'
export const STORE_GUEST = '@guest/STORE_GUEST'
export const UPDATE_GUEST = '@guest/UPDATE_GUEST'
export const REMOVE_GUEST = '@guest/REMOVE_GUEST'

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

interface Remove {
    type: typeof REMOVE_GUEST
    payload: Guest
}

export type GuestActionsTypes = Search | Store | Update | Remove