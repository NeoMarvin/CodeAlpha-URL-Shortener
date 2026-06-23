const express = require("express");

const app = express();
const router = express.Router()


app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: "URL Shortener API Running"
    })
})

module.exports = app;