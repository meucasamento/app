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

export interface GuestState {
    guests: Guest[],
    report: GuestReport
}

export const FETCH_DATA = 'FETCH_DATA'
export const STORE_GUEST = 'STORE_GUEST'
export const UPDATE_GUEST = 'UPDATE_GUEST'
export const DELETE_GUEST = 'DELETE_GUEST'

interface Fetch {
    type: typeof FETCH_DATA
    payload: Guest[]
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

export type GuestActionsTypes = Fetch | Store | Update | Delete