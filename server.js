const express = require("express");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require('body-parser');

const auth = require("./authMiddleware");
const router = jsonServer.router("data.json");
const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist"));

app.listen(90, function () {
    // eslint-disable-next-line no-console
    console.log("HTTP Server running on port 90");
});