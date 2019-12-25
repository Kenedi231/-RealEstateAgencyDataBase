const contractWithAgencyModel = require('../../models/contractWithAgencyModel');

const getContractWithAgency = async (req, res, next) => {
    const contractWithAgency = await contractWithAgencyModel.get();

    res.status(200).json(contractWithAgency)
};

module.exports = getContractWithAgency;