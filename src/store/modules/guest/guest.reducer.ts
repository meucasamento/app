import {
    GuestState,
    GuestActionsTypes,
    FETCH,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    GuestSection,
} from './guest.types'

import Guest from '../../../models/guest.model'

const initialState: GuestState = {
    guests: [],
    loading: false,
    sections: [],
    pagination: {
        limit: 1,
        page: 1,
        pages: 1,
        total: 1
    },
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
        case FETCH:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            const payload = action.payload
            const page = payload.pagination.page

            const totalPages = state.pagination.pages
            const currentPage = state.pagination.page

            if (page > 1) {
                const response = {...state, loading: false}
                if (page > totalPages) return response
                if (page < currentPage) return response
            }

            const guests = page == 1 ? payload.items : [...state.guests, ...payload.items]

            return {
                ...state,
                loading: false,
                guests,
                sections: organizeSections(guests),
                pagination: payload.pagination
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Private Methods

const organizeSections = (guests: Guest[]): GuestSection[] => {
    const godfathers = guests.filter(guest => guest.isGodfather)
    const others = guests.filter(guest => !guest.isGodfather)

    return [
        { title: `Padrinhos`, data: godfathers },
        { title: `Convidados`, data: others }
    ]
}