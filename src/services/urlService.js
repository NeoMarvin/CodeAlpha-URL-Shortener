const urlRepo = require("../repositories/urlRepo");
const { nanoid } = require("nanoid");
const AppError = require("../utils/AppError");

async function createShortUrl(data) {
    const { originalUrl } = data;

    const shortCode = nanoid(7);

    const newUrl = await urlRepo.createUrl({
        originalUrl,
        shortCode
    });

    return newUrl
}

async function getAllUrls() {
     const allUrls = await urlRepo.getUrls()

     return allUrls
}

async function redirectUrl(shortCode) {
    const url = await urlRepo.getUrlByShortCode(shortCode);

    if (!url) {
        throw new AppError("Short URL not found", 404);
    }
    
    const clicks = await urlRepo.incrementClicks(url._id);

    return url.originalUrl
}

async function deleteUrl(shortCode) {
    const deletedUrl = await urlRepo.deleteUrlByShortCode(shortCode);

    if (!deletedUrl) {
        throw new AppError("Short URL not found", 404);
    }

    return deletedUrl
}


module.exports = {
    createShortUrl,
    getAllUrls,
    redirectUrl,
    deleteUrl
};