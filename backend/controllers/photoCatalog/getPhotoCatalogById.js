const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getPhotoCatalogById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const photoById = await databaseModel.getDataFromTableById(databaseName.photoCatalog, id);

    res.status(200).json(photoById);
};

module.exports = getPhotoCatalogById;