import React from "react";
import "./App.css";
import Launchpads from "./Components/Launchpads/Launchpads";
import Launchpad from "./Components/Launchpad/Launchpad";
import Navbar from "./Navbar/Navbar";
import { Route, Redirect, Switch, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <Switch> */}
        <Route exact path="/">
          <Launchpads />
        </Route>
        <Route exact path="/:launchpadId">
          <Launchpad />
        </Route>
        {/* </Switch> */}
      </header>
    </div>
  );
}

export default App;
