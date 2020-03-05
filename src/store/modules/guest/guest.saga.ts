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
    DELETE,
    Delete,
    Store,
    STORE,
    GuestState
} from './guest.types'

import { 
    fetch,
    fetchSuccess,
    storeSuccess,
    updateSuccess,
    removeSuccess
} from './guest.actions'

import guestRepository from './../../../repositories/guest/guest.repository'
import Guest from '../../../models/guest.model'
            
function* fetchSaga(action: Fetch) {
    const store = yield select()
    const guestState: GuestState = store.guest
    const currentPages = guestState.pagination.pages

    const page =  action.payload

    try {
        if (page <= currentPages) {
            yield put(fetchSuccess(yield call(guestRepository.fetch, page)))
        }
        
        action.completion(Promise.resolve())
    } catch(err) {
        action.completion(Promise.reject(err))
    }
}

function* storeSaga(action: Store) {
    const guest = action.payload

    if (guest._id) {
        try {
            const updatedGuest: Guest = yield call(guestRepository.update, guest)
            yield put(updateSuccess(updatedGuest))
            action.completion(Promise.resolve())
        } catch(err) {
            action.completion(Promise.reject(err))
        }
    } else {
        try {
            const newGuest: Guest = yield call(guestRepository.store, guest)
            yield put(storeSuccess(newGuest))
            yield put(yield fetch(1, () => action.completion(Promise.resolve())))
        } catch(err) {
            action.completion(Promise.reject(err))
        }
    }
}

function* removeSaga(action: Delete) {
    try {
        const guest = action.payload
        yield call(guestRepository.delete, guest)
        yield put(removeSuccess(action.payload))
        action.completion(Promise.resolve())
    } catch(err) {
        action.completion(Promise.reject(err))
    }
}

export default all([
    takeLatest<GuestActionsTypes>(FETCH, fetchSaga),
    takeLatest<GuestActionsTypes>(DELETE, removeSaga),
    takeLatest<GuestActionsTypes>(STORE, storeSaga)
])