import { combineReducers } from 'redux'

import sessionState from './session/session.reducer'
import guestState from './guest/guest.reducer'
import weddingState from './wedding/weeding.reducer'
import reportState from './report/report.reducer'

export default combineReducers({
    sessionState,
    guestState,
    weddingState,
    reportState
})