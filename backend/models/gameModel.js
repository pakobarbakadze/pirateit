const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  downloadLink: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
