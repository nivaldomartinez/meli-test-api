const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())
const routes = require('./routes');

routes(app)

module.exports = app;