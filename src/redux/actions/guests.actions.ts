import { 
    FETCH_DATA,
    STORE_GUEST,
    DELETE_GUEST,
    GuestActionsTypes,
    Guest,
    UPDATE_GUEST
} from './../types/guests.types'

import { Dispatch } from 'redux'

export function fetchGuests(): (dispatch: Dispatch) => Promise<void> {
    const guests: Guest[] = [
        { id: 1, name: "Jonatas", isGodfather: true },
        { id: 2, name: "Deise", isGodfather: true },
        { id: 3, name: "Dayana" },
        { id: 4, name: "Hebert", isGodfather: true },
        { id: 5, name: "Sarah", isGodfather: true },
        { id: 6, name: "Wesley" },
        { id: 7, name: "Helder", isGodfather: true },
        { id: 8, name: "Patrícia", isGodfather: true },
        { id: 9, name: "Rafael Alves Feliciano" },
        { id: 10, name: "Ramon Alves Feliciano" },
        { id: 11, name: "Eliane Alves Feliciano" },
        { id: 12, name: "Luiz Felipe Araújo" },
        { id: 13, name: "Rodrigo Araújo" },
        { id: 14, name: "Felipe" },
        { id: 15, name: "Cristiane" }
    ]

    const response = {
        guests: guests
    }

    return async (dispatch: Dispatch) => {
        dispatch(fetchGuestsSuccess(response.guests))
    }
}

export function storeGuest(guest: Guest): GuestActionsTypes {
    return {
        type: STORE_GUEST,
        payload: guest
    }
}

export function updateGuest(guest: Guest, status: boolean): GuestActionsTypes {
    guest.isConfirmed = status

    return {
        type: UPDATE_GUEST,
        payload: guest
    }
}

export function deleteGuest(guest: Guest): GuestActionsTypes {
    return {
        type: DELETE_GUEST,
        payload: guest
    }
}


function fetchGuestsSuccess(guests: Guest[]): GuestActionsTypes {
    return {
        type: FETCH_DATA,
        payload: guests
    }
}