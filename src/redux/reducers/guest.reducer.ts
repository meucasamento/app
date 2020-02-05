import {
    STORE_GUEST,
    DELETE_GUEST,
    UPDATE_GUEST,
    FETCH_GUESTS,
    SEARCH_GUESTS,
    GuestState,
    GuestActionsTypes,
    Guest,
    GuestReport,
    GuestSection,
} from '../types/guests.types'

const initialState: GuestState = {
    guests: [],
    sections: [],
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
        case FETCH_GUESTS:
            return {
                ...state,
                guests: action.payload,
                report: report(action.payload)
            }
        case SEARCH_GUESTS:
            return {
                ...state,
                sections: sections(action.payload.guests, action.payload.query)
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

function sections(guests: Guest[], query?: string): GuestSection[] {
    var filteredGuests = guests

    if (query) {
        filteredGuests = guests.filter(guest => guest.name.indexOf(query) !== -1)
    }

    return [
        {
            title: "Padrinhos",
            data: filteredGuests.filter(guest => guest.isGodfather)
        },
        {
            title: "Convidados",
            data: filteredGuests.filter(guest => !guest.isGodfather)
        }
    ]
}

function report(guests: Guest[]): GuestReport {
    return {
        total: guests.length,
        confirmed: guests.filter(guest => guest.isConfirmed).length,
        unconfirmed: guests.filter(guest => !guest.isConfirmed).length,
        godfathers: guests.filter(guest => guest.isGodfather).length,
    }
}