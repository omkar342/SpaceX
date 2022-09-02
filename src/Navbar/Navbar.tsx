import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={classes.nav}>
      <nav>
        <div className={classes.logo}>
          <h1>
            <a href="">SpaceX</a>
          </h1>
        </div>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/:launchpadId">
              Launchpad
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} exact to="/launchpad">
              Launchpad
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
