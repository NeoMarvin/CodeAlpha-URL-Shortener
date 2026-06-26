const Url = require("../models/Url");

async function createUrl(data) {
    return await Url.create(data);
    
}

async function getUrls() {
    return await Url.find();
}

async function getUrlByShortCode(shortCode) {
    return await Url.findOne({ shortCode });
}

async function incrementClicks(id) {
    return await Url.findByIdAndUpdate(
        id,
        { $inc: { clicks: 1} },
        { new: true }
    );
}

async function deleteUrlByShortCode(shortCode) {
    return await Url.findOneAndDelete( { shortCode } )
}


module.exports = { createUrl, getUrls, getUrlByShortCode, incrementClicks, deleteUrlByShortCode };