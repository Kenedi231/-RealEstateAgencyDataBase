const contractWithAgencyModel = require('../../models/contractWithAgencyModel');

const deleteContractWithAgency = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await contractWithAgencyModel.delete(id);

    res.status(200).json(status);
};

module.exports = deleteContractWithAgency;