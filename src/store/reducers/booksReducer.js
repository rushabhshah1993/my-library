/* Package imports */
import cloneDeep from 'lodash/cloneDeep';

/* Actions import */
import * as actionTypes from './../action-types';

const initialState = {
    books: [],
    booksLoading: false,
    booksLoadingComplete: false,
    booksLoadingFailed: false
};

const reducer = (state = initialState, action) => {
    let clonedState = cloneDeep(state);

    switch(action.type) {
        case actionTypes.FETCH_BOOKS_LOADING:
            clonedState.booksLoading = true;
            return clonedState;
        case actionTypes.FETCH_BOOKS_SUCCESS:
            clonedState.booksLoading = false;
            clonedState.booksLoadingComplete = true;
            clonedState.books = action.payload;
            return clonedState;
        case actionTypes.FETCH_BOOKS_FAILED:
            clonedState.booksLoading = false;
            clonedState.booksLoadingComplete = true;
            clonedState.booksLoadingFailed = true;
            clonedState.books = [];
            return clonedState;
        default: return state;
    }
}

export default reducer;
