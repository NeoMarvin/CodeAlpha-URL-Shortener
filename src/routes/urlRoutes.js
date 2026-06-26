const express = require("express");
const urlController = require("../controllers/urlController");
const router = express.Router();

router.post("/", urlController.createShortUrl);

router.get("/", urlController.getAllUrls);

router.get("/:shortCode", urlController.redirectUrl);

router.delete("/:shortCode", urlController.deleteUrl);
module.exports = router;