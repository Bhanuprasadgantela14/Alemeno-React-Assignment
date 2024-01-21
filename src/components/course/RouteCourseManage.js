// I don't like this, but it's the only way I see to get the child routes working with react-router V4
import React from "react";
import { Route } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage"; //eslint-disable-line import/no-named-as-default

const RouteCourseManage = () => (
    <div>
        <Route path="/course/:id" component={ManageCoursePage} />
        <Route exact path="/course" component={ManageCoursePage} />
    </div>
);

export default RouteCourseManage;
