const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const deletePhotoCatalog = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const photoCatalog = await databaseModel.getDataFromTableById(databaseName.photoCatalog, id);
    const status = await Promise.all([
        databaseModel.deleteDataFromTableById(databaseName.photoCatalog, id),
        databaseModel.deleteDataFromTableById(databaseName.photo, photoCatalog.photos)
    ]);

    res.status(200).json(status);
};

module.exports = deletePhotoCatalog;