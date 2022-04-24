/* Package imports */
import {
    createStore, combineReducers,
    applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';

/* Reducer imports */
import booksReducer from './reducers/booksReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        books: booksReducer
    }),
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
