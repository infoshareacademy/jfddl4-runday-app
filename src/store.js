import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import runs, {initRunsSync} from './state/runs'

const reducer = combineReducers({
    runs,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initRunsSync())