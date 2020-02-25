import {
    put,
    all,
    call,
    takeLatest
} from 'redux-saga/effects'

import { 
    GuestActionsTypes,
    FETCH,
    Fetch,
} from './guest.types'

import { 
    fetchFailure,
    fetchSuccess
} from './guest.actions'

import guestRepository from './../../../repositories/guest/guest.repository'
import { PaginationResult } from '../../../models/response/pagination.response'
import Guest from '../../../models/guest.model'

function* fetch(action: Fetch) {
    const {
        page,
        limit
    } = action.payload

    try {
        const response: PaginationResult<Guest> = yield call(guestRepository.fetch, page, limit)
        yield put(fetchSuccess(response))
    } catch(err) {
        yield put(fetchFailure(err))
    }
}

export default all([
    takeLatest<GuestActionsTypes>(FETCH, fetch)
])