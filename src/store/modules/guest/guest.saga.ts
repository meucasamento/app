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
    Store,
    STORE,
    UPDATE,
} from './guest.types'

import { 
    fetch,
    update,
    fetchFailure,
    fetchSuccess,
    removeSuccess,
    removeFailure,
    storeFailure,
    storeSuccess,
    updateSuccess,
    updateFailure
} from './guest.actions'

import guestRepository from './../../../repositories/guest/guest.repository'
import { PaginationResult } from '../../../models/response/pagination.response'
import Guest from '../../../models/guest.model'
import { back } from './../../../services/navigation.service'
            
function* fetchGuests(action: Fetch) {
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

function* storeGuest(action: Store) {
    const guest = action.payload

    if (guest._id) {
        try {
            const updatedGuest: Guest = yield call(guestRepository.update, guest)
            yield put(updateSuccess(updatedGuest))
        } catch(err) {
            yield put(updateFailure(err))
        }
    } else {
        try {
            const newGuest: Guest = yield call(guestRepository.store, guest)
            yield put(storeSuccess(newGuest))
            yield call(fetch, 1)
        } catch(err) {
            yield put(storeFailure(err))
        }
    }

    back()
}

function* removeGuest(action: Delete) {
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
    takeLatest<GuestActionsTypes>(FETCH, fetchGuests),
    takeLatest<GuestActionsTypes>(DELETE, removeGuest),
    takeLatest<GuestActionsTypes>(STORE, storeGuest)
])