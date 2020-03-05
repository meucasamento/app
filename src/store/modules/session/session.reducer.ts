import { 
    SessionActionTypes,
    AUTHENTICATION,
    LOGOUT,
    SessionState
} from "./session.types";

const initialState: SessionState = {}

export default function redurce(
    state: SessionState = initialState,
    action: SessionActionTypes
    ): SessionState {
        return state
}