import * as types from "./actionTypes";

// increments ajax call count / _SUCCESS actions
export function beginAjaxCall() {
    return { type: types.BEGIN_AJAX_CALL };
}

// decrements ajax call count and triggers error display
export function ajaxCallError() {
    return { type: types.AJAX_CALL_ERROR };
}
