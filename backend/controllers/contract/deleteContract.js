const contractModel = require('../../models/contractModel');

const deleteContract = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await contractModel.delete(id);

    res.status(200).json(status);
};

module.exports = deleteContract;