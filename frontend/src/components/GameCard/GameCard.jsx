import React from "react";
import { Link } from "react-router-dom";

import classes from "./GameCard.module.css";

const GameCard = ({ game }) => {
  return (
    <div className={classes.card}>
      <img src={game.imageLink} alt="game cover" />
      <h1 className={classes.name}>{game.name}</h1>
      <Link to={{ pathname: "game-details/" + game.name }}>Read more</Link>
    </div>
  );
};

export default GameCard;
