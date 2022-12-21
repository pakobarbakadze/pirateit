import React, { useState } from "react";
import { Link } from "react-router-dom";

import Signin from "../../ui/SignIn/SignIn";

import classes from "./Nav.module.css";

const Nav = () => {
  const [signin, setSignin] = useState(false);

  // useEffect(() => {
  //   console.log("here");
  // }, [window.location.href]);

  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Link to={"/"}>
          Pirate<span>it</span>
        </Link>
      </div>
      <div className={classes.menu}>
        <h1 onClick={() => setSignin(!signin)}>Sign in</h1>
      </div>
      {signin ? <Signin /> : ""}
    </div>
  );
};

export default Nav;
