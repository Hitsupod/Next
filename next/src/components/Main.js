import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Questions from "./Questions";
import Results from "./Results";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/Questions" component={Questions} />
    <Route exact path="/Results" component={Results} />
  </Switch>
);
export default Main;
