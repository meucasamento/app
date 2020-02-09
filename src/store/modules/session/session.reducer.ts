import { 
    SessionState, 
    SessionActionTypes
} from "./session.types";

const initialState: SessionState = {
    loading: false
}

export const redurce = (
    state: SessionState = initialState,
    action: SessionActionTypes
    ): SessionState  => {
        return state
}