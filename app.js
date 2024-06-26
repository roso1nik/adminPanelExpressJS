const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors");

// import other
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

// main
const PORT = 3000;
const app = express();

// app
app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    mainRoute,
    gamesRouter
);

app.listen(PORT, () => {
    console.log(`server start on ${PORT}`);
    console.log("спасибо за приятные оценки к домашкам :) 🐈");
});
