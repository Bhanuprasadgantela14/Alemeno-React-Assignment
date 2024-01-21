import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import authorApi from "../api/mockAuthorApi";

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthorsFailure(error) {
    return { type: types.LOAD_AUTHORS_FAILURE, error };
}

export function createAuthorSuccess(author) {
    return { type: types.CREATE_AUTHOR_SUCCESS, author };
}

export function updateAuthorSuccess(author) {
    return { type: types.UPDATE_AUTHOR_SUCCESS, author };
}

//// THUNKS
// handle ajax calls

export function callSaveAuthor(author) {
    // getState below can be used to pull other data from app state without having to pass it in here
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return authorApi
            .saveAuthor(author)
            .then(author => {
                author.id
                    ? dispatch(updateAuthorSuccess(author))
                    : dispatch(createAuthorSuccess(author));
            })
            .catch(error => {
                //            throw(error);
                dispatch(ajaxCallError(error));
            });
    };
}

export function callLoadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return authorApi
            .getAllAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                throw error;
            });
    };
}
