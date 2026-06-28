const express = require("express");
const urlRoutes = require("./routes/urlRoutes");
const globalErrorhandler = require("./middleware/globalErrorHandler")
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the CodeAlpha URL Shortener API 🚀",
    documentation: "/API_DOCUMENTATION.md",
    endpoints: {
      create: "POST /api/urls",
      getAll: "GET /api/urls",
      redirect: "GET /:shortCode",
      delete: "DELETE /api/urls/:shortCode"
    }
  });
});

app.use("/api/urls", urlRoutes);

app.use(globalErrorhandler);

module.exports = app;