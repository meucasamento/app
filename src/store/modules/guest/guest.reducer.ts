import {
    STORE,
    REMOVE,
    UPDATE,
    SEARCH,
    GuestState,
    GuestActionsTypes,
    Guest,
    GuestReport,
    GuestSection,
} from './guest.types'

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

export default function reducer(
    state: GuestState = initialState, 
    action: GuestActionsTypes
    ): GuestState {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                sections: sections(action.payload.guests, action.payload.query)
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