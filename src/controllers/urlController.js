const urlService = require("../services/urlService");

async function createShortUrl(req, res) {
    try {
        const result = await urlService.createShortUrl(req.body);

        res.status(201).json({
            success: true,
            message: "Short URL Created",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

async function getAllUrls(req, res) {
    try {
        const urls = await urlService.getAllUrls()

        res.status(200).json({
            success: true,
            data: urls
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createShortUrl,
    getAllUrls
};