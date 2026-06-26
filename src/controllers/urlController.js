const urlService = require("../services/urlService");
const asyncWrapper = require("../utils/asyncWrapper");


const createShortUrl = asyncWrapper(async (req, res) => {
    const result = await urlService.createShortUrl(req.body);

    res.status(201).json({
        success: true,
        message: "Short URL Created Successfully",
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

const redirectUrl = asyncWrapper(async (req, res) => {
    const originalUrl = await urlService.redirectUrl(req.params.shortCode);

    res.redirect(originalUrl);
})


const deleteUrl = asyncWrapper(async (req, res) => {
    const removed = await urlService.deleteUrl(req.params.shortCode);

    res.status(200).json({
        success: true,
        message: "URL  deleted",
        data: removed
    });
})
module.exports = {
    createShortUrl,
    getAllUrls,
    redirectUrl,
    deleteUrl
};