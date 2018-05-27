import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import runs from './state/runs'
import userLogins, {initLoginSync} from './state/userLogins'
import auth from './state/auth'

const reducer = combineReducers({
    runs,
    userLogins,
    auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initLoginSync())