import React from "react";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <h1>
          Pirate<span>it</span>
        </h1>
      </div>
      <div className={classes.menu}>
        <h1>Sign in</h1>
      </div>
    </div>
  );
};

export default Nav;
