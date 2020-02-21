import {
    STORE,
    REMOVE,
    UPDATE,
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    GuestState,
    GuestActionsTypes,
    FETCH,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from './guest.types'

import Guest from '../../../models/guest.model'

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
        case FETCH:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                guests: action.payload.items,
                sections: [
                    { title: "Convidados", data: action.payload.items }
                ]
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        // case SEARCH:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case SEARCH_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         guests: action.payload.items,
        //         sections: [
        //             { title: "Convidados", data: action.payload.items }
        //         ]
        //     }
        // case SEARCH_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload
        //     }
        default:
            return state
    }
}