import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            // this is something like Ext.Apply()
            // it keeps the state immutable and copies our additional data into a copy of it
            return [
                ...state, // ES6 spread operator, explodes the values out into this array
                Object.assign({}, action.course),
            ];

        case types.UPDATE_COURSE_SUCCESS:
            return [
                // get a list of all other courses
                ...state.filter(course => course.id !== action.course.id),
                // add in updated course
                Object.assign({}, action.course),
            ];

        case types.DELETE_COURSE_SUCCESS:
            //console.log('reducer', action);
            let newList = [
                // get a list of all other courses
                ...state.filter(course => course.id !== action.course.id),
            ];
            //console.log('new list', newList);
            return newList;

        default:
            return state;
    }
}
