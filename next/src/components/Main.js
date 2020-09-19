import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Questions from "./Questions";
import PlaystationQ2 from "./Questions/Playstation/PlaystationQ2";
import PlaystationSoloQ3 from "./Questions/Playstation/PlaystationSoloQ3";
import PlaystationSquadQ3 from "./Questions/Playstation/PlaystationSquadQ3";
import XboxQ2 from "./Questions/Xbox/XboxQ2";
import XboxSoloQ3 from "./Questions/Xbox/XboxSoloQ3";
import XboxSquadQ3 from "./Questions/Xbox/XboxSquadQ3";
import NintendoQ2 from "./Questions/Nintendo/NintendoQ2";
import NintendoSoloQ3 from "./Questions/Nintendo/NintendoSoloQ3";
import NintendoSquadQ3 from "./Questions/Nintendo/NintendoSquadQ3";
import PCQ2 from "./Questions/PC/PCQ2";
import PCSoloQ3 from "./Questions/PC/PCSoloQ3";
import PCSquadQ3 from "./Questions/PC/PCSquadQ3";
import OutPut from "./OutPut";




const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/Questions" component={Questions} />
    // Playstation Questions 
    <Route exact path="/PlaystationQ2" component={PlaystationQ2} />
    <Route exact path="/PlaystationSoloQ3" component={PlaystationSoloQ3} />
    <Route exact path="/PlaystationSquadQ3" component={PlaystationSquadQ3} />

    // Xbox Quesitons
    <Route exact path="/XboxQ2" component={XboxQ2} />
    <Route exact path="/XboxSoloQ3" component={XboxSoloQ3} />
    <Route exact path="/XboxSquadQ3" component={XboxSquadQ3} />

    // Nintendo Questions
    <Route exact path="/NintendoQ2" component={NintendoQ2} />
    <Route exact path="/NintendoSoloQ3" component={NintendoSoloQ3} />
    <Route exact path="/NintendoSquadQ3" component={NintendoSquadQ3} />

    // PC Questions
    <Route exact path="/PCQ2" component={PCQ2} />
    <Route exact path="/PCSoloQ3" component={PCSoloQ3} />
    <Route exact path="/PCSquadQ3" component={PCSquadQ3} />
    
    // Outputs 
    <Route exact path="/output" component={OutPut} />

  </Switch>
);
export default Main;
