import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DynamicPage from "./pages/DynamicPage";

export class MainRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/data/:id" render={(props) => <DynamicPage {...props} />} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MainRouter;
