const express = require("express");
const urlRoutes = require("./routes/urlRoutes");
const globalErrorhandler = require("./middleware/globalErrorHandler")
const app = express();


app.use(express.json());


app.use("/api/urls", urlRoutes);

app.use(globalErrorhandler);

module.exports = app;