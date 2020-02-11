import { 
    SessionState, 
    SessionActionTypes,
    AUTHENTICATION,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from "./session.types";
import { FA5Style } from "react-native-vector-icons/FontAwesome5";

const initialState: SessionState = {
    loading: false,
    userIsLogged: false
}

export default function redurce(
    state: SessionState = initialState,
    action: SessionActionTypes
    ): SessionState {
        switch (action.type) {
            case AUTHENTICATION:
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            case AUTHENTICATION_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    userIsLogged: true,
                    error: null
                }
            case AUTHENTICATION_FAILURE:
                return {
                    ...state,
                    userIsLogged: false,
                    error: action.payload
                }
            case LOGOUT:
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            case LOGOUT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null
                }
            case LOGOUT_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            default:
                return state
        }
}