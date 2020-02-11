import { combineReducers } from 'redux'

import session from './session/session.reducer'
import guest from './guest/guest.reducer'
import wedding from './wedding/weeding.reducer'

export default combineReducers({
    session,
    guest,
    wedding
})