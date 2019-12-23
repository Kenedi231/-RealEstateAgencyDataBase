const rateModel = require('../../models/rateModel');

const createRate = async (req, res, next) => {
    const {name, count, reward} = req.body;
    const newRate = await rateModel.create([name, count, reward]);

    res.status(200).json(newRate.rows[0]) // return id
};

module.exports = createRate;