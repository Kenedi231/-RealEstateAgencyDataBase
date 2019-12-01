const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const deleteContract = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await databaseModel.deleteDataFromTableById(databaseName.contract, id);

    res.status(200).json(status);
};

module.exports = deleteContract;