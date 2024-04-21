// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const {
    sendAllGames,
    deleteGame,
    addGameController,
} = require("../controllers/games");
const { getAllGames, findAllGames } = require("../middlewares/games");

// gamesRouter.post("/games", getAllGames, addGameController);
// gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.get("/games", findAllGames, sendAllGames);
// gamesRouter.delete("/games/:id", getAllGames, deleteGame);

module.exports = gamesRouter;
