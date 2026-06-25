const urlService = require("../services/urlService");
const asyncWrapper = require("../utils/asyncWrapper");


const createShortUrl = asyncWrapper(async (req, res) => {
    const result = await urlService.createShortUrl(req.body);

    res.status(201).json({
        success: true,
        message: "User Created Successfully",
        data: result
    });
});


const getAllUrls = asyncWrapper(async (req, res) => {
    const urls = await urlService.getAllUrls();

    res.status(200).json({
        success: true,
        data: urls
    });
})

module.exports = {
    createShortUrl,
    getAllUrls
};