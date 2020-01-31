import {
    FETCH_DATA,
    STORE_GUEST,
    DELETE_GUEST,
    GuestState,
    GuestActionsTypes,
    UPDATE_GUEST,
    Guest,
    GuestReport
} from '../types/guests.types'

const initialState: GuestState = {
    guests: [],
    report: {
        total: 0,
        confirmed: 0,
        unconfirmed: 0,
        godfathers: 0
    }
}

export function guestReducer(
    state: GuestState = initialState, 
    action: GuestActionsTypes
    ): GuestState {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                guests: action.payload,
                report: report(action.payload)
            }
        case STORE_GUEST:
            return {
                ...state,
                guests: [...state.guests, action.payload]
            }
        case UPDATE_GUEST:
            const guests = state.guests 
            const index = guests.indexOf(action.payload)
            guests[index].isConfirmed = action.payload.isConfirmed

            return {
                ...state,
                guests,
                report: report(guests)
            }
        case DELETE_GUEST:
            return {
                ...state,
                guests: state.guests.filter(guest => guest.id != action.payload.id)
            }
        default:
            return state
    }
}

function report(guests: Guest[]): GuestReport {
    return {
        total: guests.length,
        confirmed: guests.filter(guest => guest.isConfirmed).length,
        unconfirmed: guests.filter(guest => !guest.isConfirmed).length,
        godfathers: guests.filter(guest => guest.isGodfather).length,
    }
}