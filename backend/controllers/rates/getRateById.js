const rateModel = require('../../models/rateModel');

const getRateById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const rateById = await rateModel.getById(id);

    res.status(200).json(rateById);
};

module.exports = getRateById;