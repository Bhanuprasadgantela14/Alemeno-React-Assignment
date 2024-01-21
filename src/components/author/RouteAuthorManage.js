// I don't like this, but it's the only way I see to get the child routes working with react-router V4
import React from "react";
import { Route } from "react-router-dom";
import ManageAuthorPage from "./ManageAuthorPage"; //eslint-disable-line import/no-named-as-default

const RouteAuthorManage = () => (
    <div>
        <Route path="/author/:id" component={ManageAuthorPage} />
        <Route exact path="/author" component={ManageAuthorPage} />
    </div>
);

export default RouteAuthorManage;
