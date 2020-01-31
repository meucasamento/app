import { 
    createStore, 
    combineReducers,
    applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import { guestReducer } from './reducers/guest.reducer'
import { weddingReducer } from './reducers/weeding.reducer'

const rootReducer = combineReducers({
    guestState: guestReducer,
    weddingState: weddingReducer
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore