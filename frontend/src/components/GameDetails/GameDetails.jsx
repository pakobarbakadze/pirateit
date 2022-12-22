import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./GameDetails.module.css";

const GameDetails = () => {
  const { game_name } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    axios
      .get("/api/games/getGame", {
        params: {
          name: game_name,
        },
      })
      .then((res) => {
        setGame(res.data.game);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  if (game)
    return (
      <div className={classes.container}>
        <h1>{game.name}</h1>
        <h2>აქ შეგიძლიათ თამაშის უფასოდ გადმოწერა</h2>
        <img src={game.imageLink} alt="game cover" />
        <h2>ჟანრი: {game.genre}</h2>
        <p>აღწერილობა: {game.description}</p>
        <h2>გადმოწერა: {game.downloadLink}</h2>
      </div>
    );
  else return <div>error</div>;
};

export default GameDetails;
