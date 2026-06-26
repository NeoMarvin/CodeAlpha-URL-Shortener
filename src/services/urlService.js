const urlRepo = require("../repositories/urlRepo");
const { nanoid } = require("nanoid");
const AppError = require("../utils/AppError");

async function createShortUrl(data) {
    const { originalUrl, shortCode: customShortCode, expiresAt } = data;

    let shortCode;

     if (customShortCode) {
        const existingShortCode = await urlRepo.getUrlByShortCode(customShortCode);

        if (existingShortCode) {
            throw new AppError("Short code already exists", 409);
        }

        shortCode = customShortCode
     } else {
        shortCode = nanoid(7)
     }

    
    if (expiresAt && new Date(expiresAt) <= new Date()) {
        throw new AppError("Expiration date must be in the future.", 400);
}
    const newUrl = await urlRepo.createUrl({
        originalUrl,
        shortCode,
        expiresAt
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
    
    if (url.expiresAt && new Date > url.expiresAt) {
        throw new AppError("This short URL has Expired.", 410);
        
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