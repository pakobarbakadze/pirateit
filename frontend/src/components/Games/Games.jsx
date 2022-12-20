import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Games.module.css";
import GameCard from "../GameCard/GameCard";

const Games = () => {
  const [games, setGames] = useState();
  useEffect(() => {
    axios
      .get("/api/games/getAllGames")
      .then((res) => {
        const data = res.data;
        setGames(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.cards}>
        {games ? games.map((game) => <GameCard key={game._id} game={game} />) : <h1>Loading</h1>}
      </div>
    </div>
  );
};

export default Games;
