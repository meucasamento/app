import { combineReducers } from 'redux'

import guest from './guest/guest.reducer'
import wedding from './wedding/weeding.reducer'

export default combineReducers({
    guest,
    wedding
})