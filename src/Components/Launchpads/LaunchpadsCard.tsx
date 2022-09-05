import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from "./LaunchpadsCard.module.css"

interface PropsType {
  launchpadsData : any;
}

function LaunchpadsCard({launchpadsData} : PropsType) {
  
  // console.log(launchpadsData.details.toString());
  
  return (
    <div className={classes.card}>
        <div className={classes.cardImage}>
          <img src={launchpadsData.images.large[0]} alt="" />
        </div>
        <div className={classes.cardContent}>
          <div className={classes.title}>
            <h1>{launchpadsData.name}</h1>
          </div>
          <p>
            {launchpadsData.details.toString().substring(0,200)+"..."}
          </p>
          <div className={classes.status}>
            <p>Status : <span style={launchpadsData.status.toUpperCase()==="RETIRED" ? {color:"#a41a1a"} : (launchpadsData.status.toUpperCase()==="ACTIVE" ? {color:"#8fce00"} : {color:"#f1c232"}) }>{launchpadsData.status.toUpperCase()}</span></p>
          </div>
          {launchpadsData.launches.length !== 0 ? <div className={classes.launches}>
          <p className={classes.launchesPara} >Top 3 Launches</p>
          <ul>
          {launchpadsData.launches.filter((launch:any,index:number)=>index<3).map((launch:any,index:number)=>{
            return <li key={index}><NavLink exact to={"/launchpad/"+launch}>{launch}</NavLink></li>
          })}
          </ul>
          </div> : <div className={classes.launches}><p>No Launches Yet!</p></div>}
        </div>
      </div>
  )
}

export default LaunchpadsCard