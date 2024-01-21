/*eslint-disable import/default */
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import App from "./components/App";
import { callLoadCourses } from "./actions/courseActions";
import { callLoadAuthors } from "./actions/authorActions";
import "./styles/styles.css"; //Webpack can import CSS files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";

const store = configureStore();

// call THUNKS to get data from API
store.dispatch(callLoadCourses());
store.dispatch(callLoadAuthors());

// REDUX - Provider connects entire app to redux store

render(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>,
    document.getElementById("app"),
);

if (module.hot) {
    module.hot.accept("./components/App", () => {
        render(
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>,
            document.getElementById("app"),
        );
    });
}
