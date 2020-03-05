import {
    GuestState,
    GuestActionsTypes,
    FETCH_SUCCESS,
    DELETE_SUCCESS,
    UPDATE_SUCCESS
} from './guest.types'

const initialState: GuestState = {
    guests: [],
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
        case FETCH_SUCCESS:
            const payload = action.payload
            const page = payload.pagination.page
            const totalPages = state.pagination.pages
            const currentPage = state.pagination.page

            if (page > 1) {
                if (page > totalPages) return state
                if (page < currentPage) return state
            }

            const guests = page == 1 ? payload.items : [...state.guests, ...payload.items]

            return {
                ...state,
                guests,
                pagination: payload.pagination
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                guests: state.guests.filter(guest => guest._id !== action.payload._id),
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                guests: state.guests.map(guest => guest._id === action.payload._id ? action.payload : guest)
            }
        default:
            return state
    }
}