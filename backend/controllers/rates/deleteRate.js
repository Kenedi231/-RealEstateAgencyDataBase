const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const deleteRate = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await databaseModel.deleteDataFromTableById(databaseName.rate, id);

    res.status(200).json(status);
};

module.exports = deleteRate;