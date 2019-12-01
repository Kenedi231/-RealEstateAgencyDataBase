const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getContractById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const userDataById = await databaseModel.getDataFromTableById(databaseName.contract, id);

    res.status(200).json(userDataById);
};

module.exports = getContractById;