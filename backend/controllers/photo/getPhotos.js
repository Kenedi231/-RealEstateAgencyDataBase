const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getPhotos = async (req, res, next) => {
    const photos = await databaseModel.getTableByName(databaseName.photo);

    res.status(200).json(photos)
};

module.exports = getPhotos;