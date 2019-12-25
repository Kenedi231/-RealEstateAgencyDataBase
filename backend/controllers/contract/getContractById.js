const contractModel = require('../../models/contractModel');

const getContractById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const contract = await contractModel.getById(id);

    res.status(200).json(contract);
};

module.exports = getContractById;