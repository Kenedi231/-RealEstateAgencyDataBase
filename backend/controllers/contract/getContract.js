const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getContract = async (req, res, next) => {
    const contractWithAgency = await databaseModel.getTableByName(databaseName.contract);

    res.status(200).json(contractWithAgency)
};

module.exports = getContract;