const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getPhotoCatalog = async (req, res, next) => {
    const photoCatalog = await databaseModel.getTableByName(databaseName.photoCatalog);

    res.status(200).json(photoCatalog)
};

module.exports = getPhotoCatalog;