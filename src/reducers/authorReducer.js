import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        case types.CREATE_AUTHOR_SUCCESS:
            // this is something like Ext.Apply()
            // it keeps the state immutable and copies our additional data into a copy of it
            return [
                ...state, // ES6 spread operator, explodes the values out into this array
                Object.assign({}, action.author),
            ];

        case types.UPDATE_AUTHOR_SUCCESS:
            return [
                // get a list of all other authors
                ...state.filter(author => author.id !== action.author.id),
                // add in updated author
                Object.assign({}, action.author),
            ];

        default:
            return state;
    }
}
