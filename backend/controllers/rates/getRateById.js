const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getRateById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const rateById = await databaseModel.getDataFromTableById(databaseName.rate, id);

    res.status(200).json(rateById);
};

module.exports = getRateById;