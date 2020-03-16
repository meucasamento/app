import { 
    createStore,
    compose,
    applyMiddleware
} from 'redux'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

import actionLoggerMiddleware from '../middlewares/Redux/ActionLogger'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    compose(applyMiddleware(
        sagaMiddleware, 
        actionLoggerMiddleware
    ))
)

sagaMiddleware.run(rootSaga)

export default store