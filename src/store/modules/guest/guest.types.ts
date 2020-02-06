import { SectionListData } from "react-native"

export const SEARCH = '@guest/SEARCHS'
export const STORE = '@guest/STORE'
export const UPDATE = '@guest/UPDATE'
export const REMOVE = '@guest/REMOVE'

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
    type: typeof SEARCH
    payload: {
        query?: string,
        guests: Guest[]
    }
}

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

export type GuestActionsTypes = Search | Store | Update | Remove