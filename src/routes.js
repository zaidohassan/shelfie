import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";

export default (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/add" component={Form} exact />
    <Route path="/edit/:id" component={Form} exact />
  </Switch>
);
