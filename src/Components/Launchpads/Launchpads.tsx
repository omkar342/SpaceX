import React from "react";
import classes from "./Launchpads.module.css";
import LaunchpadsCards from "./LaunchpadsCards";

function Launchpads() {
  return (
    <div>
      <div className={classes.title}>
        <h1>Launchpads</h1>
      </div>
      <LaunchpadsCards />
    </div>
  );
}

export default Launchpads;
