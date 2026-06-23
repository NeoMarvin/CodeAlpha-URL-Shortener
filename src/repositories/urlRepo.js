const Url = require("../models/Url");

async function createUrl(data) {
    return await Url.create(data);
    
}
module.exports = { createUrl };