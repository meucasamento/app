import {
    put, 
    call,
    takeLatest,
    all
} from 'redux-saga/effects'

import { 
    AUTHENTICATION, 
    LOGOUT,
    AuthenticationActionType,
    LogoutActionType
} from './session.types'

import sessionRepository from '../../../repositories/session/session.repository'
import session from '../../../utils/SessionMananger'
import Token from '../../../models/token.model'

function* authenticationSaga(action: AuthenticationActionType) {
    try {
        const credentials = action.payload
        const token: Token = yield call(sessionRepository.authentication, credentials)
        yield call(session.start, credentials, token)
        action.completion(Promise.resolve())
    } catch(err) {
        action.completion(Promise.reject(err))
    }
}

function* logoutSaga(action: LogoutActionType) {
    try {
        yield call(session.destroy)
        action.completion(Promise.resolve())
    } catch(err) {
        action.completion(Promise.reject(err))
    }
}

export default all([
    takeLatest<AuthenticationActionType>(AUTHENTICATION, authenticationSaga),
    takeLatest<LogoutActionType>(LOGOUT, logoutSaga)
])