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

import Guest from '../../../models/guest.model'
import GuestRepository from './../../../repositories/guest/guest.repository'

const fetchData = async (): Promise<Guest[]> => {
    return await GuestRepository.guests()
    .then(response => response.items)
}

function* search(data: GuestActionsTypes) {
    try {
        const response = yield call(fetchData)
        yield put(searchSuccess(response as Guest[]))
    } catch(e) {
        yield put(searchFailure(e))
    }
}

export default all([
    takeLatest<GuestActionsTypes>(SEARCH, search),
])