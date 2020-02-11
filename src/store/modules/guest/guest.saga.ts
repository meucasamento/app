import {
    put,
    all,
    call,
    takeLatest
} from 'redux-saga/effects'

import { 
    SEARCH, 
    GuestActionsTypes
} from './guest.types'

import { 
    searchSuccess, 
    searchFailure
} from './guest.actions'

import guestRepository from './../../../repositories/guest/guest.repository'

function* search() {
    try {
        const response = yield call(guestRepository.guests)
        yield put(searchSuccess(response))
    } catch(err) {
        yield put(searchFailure(err))
    }
}

export default all([
    takeLatest<GuestActionsTypes>(SEARCH, search),
])