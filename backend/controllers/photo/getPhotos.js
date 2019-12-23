const photoModel = require('../../models/photoModel');

const getPhotos = async (req, res, next) => {
    const photos = await photoModel.get();

    res.status(200).json(photos)
};

module.exports = getPhotos;