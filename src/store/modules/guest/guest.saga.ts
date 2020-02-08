import {
    put,
    all,
    call,
    takeLatest,
    delay
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

type Teste = {
    id: number,
    title: string
}

const fetchData = async (): Promise<Teste[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json() as Promise<Teste[]>
}

function* search(data: GuestActionsTypes) {
    try {
        const response = yield call(fetchData)
        const data = response as Teste[]
        const guests: Guest[] = data.map(data => ({ 
            id: data.id,
            name: data.title
        }))

        yield put(searchSuccess(guests))
    } catch(e) {
        yield put(searchFailure(e))
    }
}

export default all([
    takeLatest<GuestActionsTypes>(SEARCH, search),
])