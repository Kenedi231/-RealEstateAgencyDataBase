const rateModel = require('../../models/rateModel');

const deleteRate = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await rateModel.delete(id);

    res.status(200).json(status);
};

module.exports = deleteRate;