import {
    put,
    all,
    call,
    takeLatest,
    select
} from 'redux-saga/effects'

import { 
    GuestActionsTypes,
    FETCH,
    Fetch,
    GuestState
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
        const response: PaginationResult<Guest> = yield call(guestRepository.guests, page, limit)
        yield put(fetchSuccess(response))
    } catch(err) {
        yield put(fetchFailure(err))
    }
}

export default all([
    takeLatest<GuestActionsTypes>(FETCH, fetch)
])