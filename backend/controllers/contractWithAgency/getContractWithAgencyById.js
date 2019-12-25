const contractWithAgencyModel = require('../../models/contractWithAgencyModel');

const getContractWithAgencyById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const userDataById = await contractWithAgencyModel.getById(id);

    res.status(200).json(userDataById);
};

module.exports = getContractWithAgencyById;