import {
    STORE,
    REMOVE,
    UPDATE,
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    GuestState,
    GuestActionsTypes,
} from './guest.types'

import Guest from '../../../models/guest.model'
import GuestReport from '../../../models/guestReport.model'

const initialState: GuestState = {
    guests: [],
    loading: false,
    sections: [],
    report: {
        total: 0,
        confirmed: 0,
        unconfirmed: 0,
        godfathers: 0
    }
}

export default function reducer(
    state: GuestState = initialState, 
    action: GuestActionsTypes
    ): GuestState {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                loading: true
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                guests: action.payload.items,
                sections: [
                    { title: "Convidados", data: action.payload.items }
                ]
            }
        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case STORE:
            return {
                ...state,
                guests: [...state.guests, action.payload]
            }
        case UPDATE:
            const guests = state.guests 
            const index = guests.indexOf(action.payload)
            guests[index].isConfirmed = action.payload.isConfirmed

            return {
                ...state,
                guests,
                report: report(guests)
            }
        case REMOVE:
            return {
                ...state,
                // guests: state.guests.filter(guest => guest.id != action.payload.id)
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