import {
    put,
    all,
    call,
    takeLatest
} from 'redux-saga/effects'

import { 
    GuestActionsTypes,
    FETCH,
    Fetch
} from './guest.types'

import { 
    fetchFailure,
    fetchSuccess
} from './guest.actions'

import guestRepository from './../../../repositories/guest/guest.repository'
import Pagination from '../../../models/response/pagination.response'
import Guest from '../../../models/guest.model'

function* fetch(action: Fetch) {
    try {
        const { page, limit } = action.payload
        const response: Pagination<Guest> = yield call(guestRepository.guests, page, limit)
        yield put(fetchSuccess(response))
    } catch(err) {
        yield put(fetchFailure(err))
    }
}

export default all([
    takeLatest<GuestActionsTypes>(FETCH, fetch)
])