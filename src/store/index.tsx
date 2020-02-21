import { 
    createStore,
    compose,
    applyMiddleware
} from 'redux'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

import actionLoggerMiddleware from '../middlewares/ActionLogger'
import authenticationMiddleware from '../middlewares/AuthenticationInterceptor'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    compose(applyMiddleware(
        sagaMiddleware, 
        actionLoggerMiddleware,
        authenticationMiddleware
    ))
)

sagaMiddleware.run(rootSaga)

export default store