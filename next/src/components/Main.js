import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Questions from "./Questions";
import PlaystationQ2 from "./Questions/Playstation/PlaystationQ2";
import PlaystationSoloQ3 from "./Questions/Playstation/PlaystationSoloQ3";
import PlaystationSquadQ3 from "./Questions/Playstation/PlaystationSquadQ3";
import PlayStationSoloFPSOutPut from "./Outputs/Playstation/PlayStationSoloFPSOutPut";
import PlayStationSoloRPGOutPut from "./Outputs/Playstation/PlayStationSoloRPGOutPut";
import PlayStationSquadFPSOutPut from "./Outputs/Playstation/PlayStationSquadFPSOutPut";
import PlayStationSquadRPGOutPut from "./Outputs/Playstation/PlayStationSquadRPGOutPut";
import XboxQ2 from "./Questions/Xbox/XboxQ2";
import XboxSoloQ3 from "./Questions/Xbox/XboxSoloQ3";
import XboxSquadQ3 from "./Questions/Xbox/XboxSquadQ3";
import xboxSoloFPSOutPut from "./Outputs/Xbox/xboxSoloFPSOutPut";
import xboxSoloRPGOutPut from "./Outputs/Xbox/xboxSoloRPGOutPut";
import xboxSquadFPSOutPut from "./Outputs/Xbox/xboxSquadFPSOutPut";
import xboxSquadRPGOutPut from "./Outputs/Xbox/xboxSquadRPGOutPut";
import NintendoQ2 from "./Questions/Nintendo/NintendoQ2";
import NintendoSoloQ3 from "./Questions/Nintendo/NintendoSoloQ3";
import NintendoSquadQ3 from "./Questions/Nintendo/NintendoSquadQ3";
import NintendoSoloFPSOutPut from "./Outputs/Nintendo/NintendoSoloFPSOutPut";
import NintendoSoloRPGOutPut from "./Outputs/Nintendo/NintendoSoloRPGOutPut";
import NintendoSquadFPSOutPut from "./Outputs/Nintendo/NintendoSquadFPSOutPut";
import NintendoSquadRPGOutPut from "./Outputs/Nintendo/NintendoSquadRPGOutPut";
import PCQ2 from "./Questions/PC/PCQ2";
import PCSoloQ3 from "./Questions/PC/PCSoloQ3";
import PCSquadQ3 from "./Questions/PC/PCSquadQ3";
import PCSoloFPSOutPut from "./Outputs/PC/PCSoloFPSOutPut";
import PCSoloRPGOutPut from "./Outputs/PC/PCSoloRPGOutPut";
import PCSquadFPSOutPut from "./Outputs/PC/PCSquadFPSOutPut";
import PCSquadRPGOutPut from "./Outputs/PC/PCSquadRPGOutPut";
// import OutPut from "./OutPut";




const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/Questions" component={Questions} />
    {/* // Playstation Questions  */}
    <Route exact path="/PlaystationQ2" component={PlaystationQ2} />
    <Route exact path="/PlaystationSoloQ3" component={PlaystationSoloQ3} />
    <Route exact path="/PlaystationSquadQ3" component={PlaystationSquadQ3} />

    {/* // Xbox Quesitons */}
    <Route exact path="/XboxQ2" component={XboxQ2} />
    <Route exact path="/XboxSoloQ3" component={XboxSoloQ3} />
    <Route exact path="/XboxSquadQ3" component={XboxSquadQ3} />

    {/* // Nintendo Questions */}
    <Route exact path="/NintendoQ2" component={NintendoQ2} />
    <Route exact path="/NintendoSoloQ3" component={NintendoSoloQ3} />
    <Route exact path="/NintendoSquadQ3" component={NintendoSquadQ3} />

    {/* // PC Questions */}
    <Route exact path="/PCQ2" component={PCQ2} />
    <Route exact path="/PCSoloQ3" component={PCSoloQ3} />
    <Route exact path="/PCSquadQ3" component={PCSquadQ3} />
    
    {/* // Nintendo Outputs */}
    <Route exact path="/NintendoSoloFPSOutPut" component={NintendoSoloFPSOutPut} />
    <Route exact path="/NintendoSoloRPGOutPut" component={NintendoSoloRPGOutPut} />
    <Route exact path="/NintendoSquadFPSOutPut" component={NintendoSquadFPSOutPut} />
    <Route exact path="/NintendoSquadRPGOutPut" component={NintendoSquadRPGOutPut} />

     {/* PC Outputs  */}
    <Route exact path="/PCSoloFPSOutPut" component={PCSoloFPSOutPut} />
    <Route exact path="/PCSoloRPGOutPut" component={PCSoloRPGOutPut} />
    <Route exact path="/PCSquadFPSOutPut" component={PCSquadFPSOutPut} />
    <Route exact path="/PCSquadRPGOutPut" component={PCSquadRPGOutPut} />

    {/*  PlayStation Outputs */}
    <Route exact path="/PlayStationSoloFPSOutPut" component={PlayStationSoloFPSOutPut} />
    <Route exact path="/PlayStationSoloRPGOutPut" component={PlayStationSoloRPGOutPut} />
    <Route exact path="/PlayStationSquadFPSOutPut" component={PlayStationSquadFPSOutPut} />
    <Route exact path="/PlayStationSquadRPGOutPut" component={PlayStationSquadRPGOutPut} />

    {/*  Xbox Outputs */}
    <Route exact path="/xboxSoloFPSOutPut" component={xboxSoloFPSOutPut} />
    <Route exact path="/xboxSoloRPGOutPut" component={xboxSoloRPGOutPut} />
    <Route exact path="/xboxSquadFPSOutPut" component={xboxSquadFPSOutPut} />
    <Route exact path="/xboxSquadRPGOutPut" component={xboxSquadRPGOutPut} />

  </Switch>
);
export default Main;
