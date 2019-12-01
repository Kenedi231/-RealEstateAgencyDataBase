const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getApartmentById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const dataById = await databaseModel.getDataFromTableById(databaseName.apartment, id);

    res.status(200).json(dataById);
};

module.exports = getApartmentById;