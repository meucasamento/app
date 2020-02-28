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
    DELETE,
    Delete,
} from './guest.types'

import { 
    fetchFailure,
    fetchSuccess,
    removeSuccess,
    removeFailure
} from './guest.actions'

import guestRepository from './../../../repositories/guest/guest.repository'
import { PaginationResult } from '../../../models/response/pagination.response'
import Guest from '../../../models/guest.model'
import { back } from './../../../services/navigation.service'
            
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

function* remove(action: Delete) {
    try {
        const guest = action.payload
        yield call(guestRepository.delete, guest)
        yield put(removeSuccess(action.payload))
        back()
    } catch(err) {
        yield put(removeFailure(err))
    }
}

export default all([
    takeLatest<GuestActionsTypes>(FETCH, fetch),
    takeLatest<GuestActionsTypes>(DELETE, remove)
])