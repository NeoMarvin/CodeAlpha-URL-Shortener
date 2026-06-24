const Url = require("../models/Url");

async function createUrl(data) {
    return await Url.create(data);
    
}

async function getUrls() {
    return await Url.find();
}
module.exports = { createUrl, getUrls };