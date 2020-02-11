import {
    put, 
    call,
    takeLatest,
    all
} from 'redux-saga/effects'

import { 
    authenticationFailure, 
    authenticationSuccess, 
    logoutSuccess, 
    logoutFailure} from './session.actions'

import { 
    AUTHENTICATION, 
    Authentication, 
    LOGOUT, 
    Logout
} from './session.types'

import sessionRepository from '../../../repositories/session/session.repository'
import { navigate } from '../../../services/navigation.service'
import session from '../../../utils/sessionMananger'
import Token from '../../../models/token.model'

function* authentication(action: Authentication) {
    try {
        const auth = action.payload
        const token: Token = yield call(sessionRepository.authentication, auth)
        
        yield call(session.start, auth, token.token)
        yield put(authenticationSuccess(token))

        navigate("App")
    } catch(err) {
        yield put(authenticationFailure(err))
    }
}

function* logout() {
    try {
        yield call(session.destroy)
        yield put(logoutSuccess())
        
        navigate("Auth")
    } catch(err) {
        yield put(logoutFailure(err))
    }
}

export default all([
    takeLatest<Authentication>(AUTHENTICATION, authentication),
    takeLatest<Logout>(LOGOUT, logout)
])