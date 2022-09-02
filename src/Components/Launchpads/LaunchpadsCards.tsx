import React, { useEffect, useState } from "react";
import LaunchpadsCard from "./LaunchpadsCard";
import classes from "./LaunchpadsCards.module.css";

function LaunchpadsCards() {
  const [launchpadsData, setLaunchpadsData] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (): any => {
    return fetch("https://api.spacexdata.com/v4/launchpads")
      .then((response) => response.json())
      .then((data) => {
        setLaunchpadsData(data);
      });
  };

  return (
    <div className={classes.cards}>
      {launchpadsData.map((launchpad: any, index: number) => {
        return <LaunchpadsCard key={index} launchpadsData={launchpad} />;
      })}
    </div>
  );
}

export default LaunchpadsCards;
