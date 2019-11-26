const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getRates = async (req, res, next) => {
    const rates = await databaseModel.getTableByName(databaseName.rate);

    res.status(200).json(rates)
};

module.exports = getRates;