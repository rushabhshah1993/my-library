/* Package imports */
import axios from "axios";

/* Actions imports */
import * as actions from './../action-types';

export const fetchBooks = () => {
    return dispatch => {
        dispatch(fetchBooksLoading());
        axios.get(`https://my-library-495db-default-rtdb.firebaseio.com/books.json`)
        .then(response => {
            console.log("response:   ", response);
            dispatch(fetchBooksSuccess(response.data));
        })
        .catch(error => {
            console.log("error:   ", error);
            dispatch(fetchBooksError(error));
        })
    }
}

const fetchBooksLoading = () => {
    return {
        type: actions.FETCH_BOOKS_LOADING
    }
}

const fetchBooksSuccess = data => {
    return {
        type: actions.FETCH_BOOKS_SUCCESS,
        payload: data
    }
}

const fetchBooksError = error => {
    return {
        type: actions.FETCH_BOOKS_FAILED,
        error: error
    }
}