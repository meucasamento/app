import { all } from 'redux-saga/effects'
import guest from './guest/guest.saga'

export default function* rootSaga() {
    return yield all([guest])
}