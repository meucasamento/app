import { 
    ReportState, 
    ReportActionTypes, 
    FETCH_SUCCESS, 
    FETCH_FAILURE,
    FETCH
} from "./report.types";

const initialState = {
    report: {
        guests: {
            engaged: 0,
            fiancee: 0,
            total: 0
        },
        godfathers: {
            engaged: 0,
            fiancee: 0,
            total: 0
        },
        invitations: {
            delivered: 0,
            undelivered: 0,
            total: 0
        }
    },
    isLoading: false,
    error: null
}

export default function reducer(
    state: ReportState = initialState,
    action: ReportActionTypes): ReportState {
        switch (action.type) {
            case FETCH:
                return {
                    ...state,
                    isLoading: true
                }
            case FETCH_SUCCESS:
                return {
                    ...initialState,
                    report: action.payload
                }
            case FETCH_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
            default:
                return state
        }
}