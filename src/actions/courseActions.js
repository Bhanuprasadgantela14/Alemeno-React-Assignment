import * as types from "./actionTypes";
import courseApi from "../api/mockCourseApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCoursesFailure(error) {
    return { type: types.LOAD_COURSES_FAILURE, error };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(course) {
    //console.log('deleteCourseSuccess');
    return { type: types.DELETE_COURSE_SUCCESS, course };
}

export function deleteCourseFailure(course) {
    return { type: types.DELETE_COURSE_FAILURE, course };
}

//// THUNKS
// handle asynchronous calls

export function callLoadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall()); // increment ajax call count
        return courseApi
            .getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw error;
            });
    };
}

export function callSaveCourse(course) {
    // getState below can be used to pull other data from app state without having to pass it in here
    return function(dispatch, getState) {
        dispatch(beginAjaxCall()); // increment ajax call count
        return courseApi
            .saveCourse(course)
            .then(course => {
                course.id
                    ? dispatch(updateCourseSuccess(course))
                    : dispatch(createCourseSuccess(course));
            })
            .catch(error => {
                //            throw(error);
                dispatch(ajaxCallError(error));
            });
    };
}

export function callDeleteCourse(course) {
    //console.log('callDeleteCourse Action');
    // getState below can be used to pull other data from app state without having to pass it in here
    return function(dispatch, getState) {
        dispatch(beginAjaxCall()); // increment ajax call count
        //console.log('begin dispatch', course);
        return courseApi
            .deleteCourse(course)
            .then(course => {
                //console.log('ajax success', course);
                dispatch(deleteCourseSuccess(course));
                //console.log('dispatched deleteCourseSuccess');
            })
            .catch(error => {
                //            throw(error);
                //console.log('ajax error', course);
                dispatch(ajaxCallError(error));
            });
    };
}
