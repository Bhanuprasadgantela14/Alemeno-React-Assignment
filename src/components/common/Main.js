import React from "react";
// import Routes from '../../routes'
import { Switch, Route } from "react-router-dom";

import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import CoursesPage from "../course/CoursesPage";
import AuthorsPage from "../author/AuthorsPage";
import NotFoundPage from "../common/NotFoundPage";
import RouteCourseManage from "../course/RouteCourseManage"; //eslint-disable-line import/no-named-as-default
import RouteAuthorManage from "../author/RouteAuthorManage"; //eslint-disable-line import/no-named-as-default

// The Main component renders one of the provided routes
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course" component={RouteCourseManage} />
            <Route path="/authors" component={AuthorsPage} />
            <Route path="/author" component={RouteAuthorManage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </main>
);

export default Main;
