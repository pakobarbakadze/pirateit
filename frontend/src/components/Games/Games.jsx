import React, { useEffect } from "react";
import axios from "axios";

import classes from "./Games.module.css";

const Games = () => {
  useEffect(() => {
    axios
      .get("/api/games/getAllGames")
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <div className={classes.container}></div>;
};

export default Games;
