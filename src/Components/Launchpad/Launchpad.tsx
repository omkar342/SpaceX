import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Launchpad.module.css";
import LaunchpadCard from "./LaunchpadCard";

function Launchpad() {
  const { launchpadId } = useParams<{ launchpadId: string }>();

  return (
    <div className={classes.launchpad}>
      <div className={classes.title}></div>
      <LaunchpadCard launchpadId={launchpadId} />
    </div>
  );
}

export default Launchpad;
