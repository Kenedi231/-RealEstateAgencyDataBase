const rateModel = require('../../models/rateModel');

const getRates = async (req, res, next) => {
    const rates = await rateModel.get();

    res.status(200).json(rates)
};

module.exports = getRates;