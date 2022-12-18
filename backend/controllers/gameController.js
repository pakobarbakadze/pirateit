import Game from "../models/gameModel";

// @desc Upload game
// @route POST /api/games/upload
// @acces Admin
const uploadGame = async (req, res) => {
  const newGame = new Game(req.body);

  try {
    await newGame.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
};

// @desc Get game
// @route GET /api/games/getGame
// @acces Public
const getGame = async (req, res) => {
  try {
    const name = req.body.name;
    const game = await Game.findOne({ name: name });
    res.status(200).send({ game });
  } catch (e) {
    res.status(404).send(e);
  }
};

// @desc Get all games
// @route GET /api/games/getAllGames
// @acces Public
const getAllGames = async (req, res) => {
  Game.find({})
    .then((games) => {
      res.send(games);
    })
    .catch((e) => {
      res.status(500).send();
    });
};

export { uploadGame, getGame, getAllGames };
