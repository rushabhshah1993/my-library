/* Package imports */
import axios from "axios";

/* Actions imports */
import * as actions from './../action-types';

export const fetchBooks = () => {
    return dispatch => {
        dispatch(fetchBooksLoading());
        return axios.get(`https://my-library-495db-default-rtdb.firebaseio.com/books.json`)
        .then(response => {
            dispatch(fetchBooksSuccess(response.data));
        })
        .catch(error => {
            console.log("Error in fetching books:   ", error);
            dispatch(fetchBooksError(error));
        })
    }
}

export const addBook = data => {
    return dispatch => {
        return axios.put(`https://my-library-495db-default-rtdb.firebaseio.com/books.json`, data)
        .then(response => {
            dispatch(fetchBooks());
            return {success: true};
        })
        .catch(error => {
            console.log("Error in adding book:    ", error);
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