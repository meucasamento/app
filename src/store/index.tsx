import { 
    createStore,
    compose,
    applyMiddleware
} from 'redux'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

import loggerMiddleware from './middleware/logger'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware, loggerMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store