import { compose, createStore, applyMiddleware } from 'redux'

import rootReducer from './rootReducer'

const logger = ({ getState }) => {
    return next => action => {
        console.log('will dispatch', action)
        console.log('state after dispatch', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return next(action)
    }
}

const composeEnhancers = compose(applyMiddleware(logger))

const store = createStore(rootReducer, undefined, composeEnhancers);

export default store