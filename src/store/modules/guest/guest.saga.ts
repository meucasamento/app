import {
    put,
    all,
    takeLatest
} from 'redux-saga/effects'

import { Guest, SEARCH } from './guest.types'
import { searchSuccess } from './guest.actions'

const guests: Guest[] = [
    { id: 1, name: "Jenifer" }
]

function* search() {
    yield put(searchSuccess(guests))
}

export default all([
    takeLatest(SEARCH, search),
])