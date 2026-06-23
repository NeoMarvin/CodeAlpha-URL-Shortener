const urlRepo = require("../repositories/urlRepo");
const { nanoid } = require("nanoid");

async function createShortUrl(data) {
    const { originalUrl } = data;

    const shortCode = nanoid(7);

    const newUrl = await urlRepo.createUrl({
        originalUrl,
        shortCode
    });

    return newUrl
}

module.exports = {
    createShortUrl
};