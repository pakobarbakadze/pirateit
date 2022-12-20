import React, { useState } from "react";

import Signin from "../../ui/SignIn/SignIn";

import classes from "./Nav.module.css";

const Nav = () => {
  const [signin, setSignin] = useState(false);

  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <h1>
          Pirate<span>it</span>
        </h1>
      </div>
      <div className={classes.menu}>
        <h1 onClick={() => setSignin(!signin)}>Sign in</h1>
      </div>
      {signin ? <Signin /> : ""}
    </div>
  );
};

export default Nav;
