import {
    put,
    all,
    call,
    takeLatest
} from 'redux-saga/effects'
import { FetchActionTypes, FETCH } from './report.types';

import reportRepository from './../../../repositories/report/report.repository'
import { fetchFailure, fetchSuccess } from './report.actions';

function* fetchSaga() {
    try {
        const report = yield call(reportRepository.fetch)
        yield put(fetchSuccess(report))
    } catch(err) {
        yield put(fetchFailure(err))
    }
}

export default all([
    takeLatest<FetchActionTypes>(FETCH, fetchSaga)
])