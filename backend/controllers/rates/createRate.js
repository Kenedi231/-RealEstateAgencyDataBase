const databaseModel = require('../../models/db');

const createRate = async (req, res, next) => {
    const {name, count, reward} = req.body;
    const newRate = await databaseModel.createRate([name, count, reward]);

    res.status(200).json(newRate.rows[0]) // return id
};

module.exports = createRate;