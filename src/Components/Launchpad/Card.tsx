import React from "react";
import classes from "./Card.module.css";

interface PropType {
  launchpadData: any;
  imageURL: string;
}

function Card({ launchpadData, imageURL }: PropType) {
  return (
    <div className={classes.card}>
      <div className={classes.cardImage}>
        <img src={imageURL} alt="" />
      </div>
      <div className={classes.cardContent}>
        <p>Name : {launchpadData.name}</p>
        <p>
          Date :{" "}
          {launchpadData.date_local &&
            launchpadData.date_local.toString().substring(0, 10)}
        </p>
        {launchpadData.details === null ? (
          <p>No Details Available.</p>
        ) : (
          <p>Details : {launchpadData.details}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
