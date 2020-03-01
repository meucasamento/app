import {
    GuestState,
    GuestActionsTypes,
    FETCH,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    STORE,
    STORE_SUCCESS,
    STORE_FAILURE,
    DELETE,
    DELETE_SUCCESS,
    DELETE_FAILURE,
    UPDATE,
    UPDATE_SUCCESS,
    UPDATE_FAILURE,
} from './guest.types'

const initialState: GuestState = {
    guests: [],
    loading: false,
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
                pagination: payload.pagination
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case STORE:
            return {
                ...state,
                loading: true
            }
        case STORE_SUCCESS:
            return {
                ...state,
                // guests: [...state.guests, action.payload],
                loading: false
            }
        case STORE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE:
            return {
                ...state,
                loading: true
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                guests: state.guests.filter(guest => guest._id !== action.payload._id),
                loading: false
            }
        case DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UPDATE:
            return {
                ...state,
                loading: true
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                guests: state.guests.map(guest => guest._id === action.payload._id ? action.payload : guest)
            }
        case UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}