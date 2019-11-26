const databaseModel = require('../models/db');
const databaseName = require('../constants/databaseName');

const getApartments = async (req, res, next) => {
    const apartments = await databaseModel.getTableByName(databaseName.apartment);

    res.status(200).json(apartments)
};

module.exports = getApartments;