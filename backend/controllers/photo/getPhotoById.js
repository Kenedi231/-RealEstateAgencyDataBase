const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getPhotoById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const photoById = await databaseModel.getDataFromTableById(databaseName.photo, id);

    res.status(200).json(photoById);
};

module.exports = getPhotoById;