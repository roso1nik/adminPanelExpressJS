const { readData } = require("../utils/data");
const games = require("../models/game");

async function getAllGames(req, res, next) {
    const games = await readData("./data/games.json");
    if (!games) {
        res.status(400);
        res.send({
            status: "error",
            message: "Нет игр в базе данных. Добавьте игру.",
        });
        return;
    }
    req.games = games;
    next();
}

const findAllGames = async (req, res, next) => {
    // По GET-запросу на эндпоинт /games найдём все документы категорий
    // и с помощью метода populate запросим данные о связанных
    // категориях и пользователях
    const result = await games
        .find({})
        .populate("categories")
        .populate("users");
    next();
};

module.exports = { getAllGames, findAllGames };
