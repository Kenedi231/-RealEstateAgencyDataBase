const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getContractWithAgency = async (req, res, next) => {
    const contractWithAgency = await databaseModel.getTableByName(databaseName.contractWithAgency);

    res.status(200).json(contractWithAgency)
};

module.exports = getContractWithAgency;