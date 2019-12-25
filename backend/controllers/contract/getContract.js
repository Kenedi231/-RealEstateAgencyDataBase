const contractModel = require('../../models/contractModel');

const getContract = async (req, res, next) => {
    const contract = await contractModel.get();

    res.status(200).json(contract)
};

module.exports = getContract;