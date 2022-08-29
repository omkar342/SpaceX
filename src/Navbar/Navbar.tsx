import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.nav}>
      <nav>
        <div className={classes.logo}>
            <h1><a href="">SpaceX</a></h1>
        </div>
        <ul>
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Launchpads</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Launchpads</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
