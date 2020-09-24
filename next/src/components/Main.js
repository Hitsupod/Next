import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Questions from "./Questions";

import OutPut from "./OutPut";

import Results from "./Results";

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Questions" component={Questions} />

      <Route exact path={["/output", "/games/"]}>
        <OutPut />
      </Route>
      <Route exact path="/Results" component={Results} />
    </Switch>
  </Router>
);
export default Main;
//component={OutPut}
