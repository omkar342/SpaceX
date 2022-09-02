import React, { useState, useEffect } from "react";
import classes from "./LaunchpadCard.module.css";
import Card from "./Card";

interface PropType {
  launchpadId: any;
}

function LaunchpadCard({ launchpadId }: PropType) {
  const [launchpadData, setLaunchpadData] = useState<any>([]);
  const [imageURL, setImageURL] = useState<any>();

  const id = "https://api.spacexdata.com/v4/launches/" + launchpadId;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (): any => {
    return fetch("https://api.spacexdata.com/v4/launches/" + launchpadId)
      .then((response) => response.json())
      .then((data) => {
        setLaunchpadData(data);
        setImageURL(data.links.patch.small);
      });
  };

  return (
    <div className={classes.launchpadCard}>
      <Card launchpadData={launchpadData} imageURL={imageURL} />
    </div>
  );
}

export default LaunchpadCard;
