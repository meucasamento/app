import { all } from 'redux-saga/effects'

import session from './session/session.saga'
import guest from './guest/guest.saga'

export default function* rootSaga() {
    return yield all([
        session,
        guest
    ])
}