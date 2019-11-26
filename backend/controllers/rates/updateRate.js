const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const updateRate = async (req, res, next) => {
    const {name, count, reward} = req.body;
    const id = parseInt(req.params.id);
    const newRate = await databaseModel.updateRate(databaseName.rate, id, [name, count, reward]);

    res.status(200).json({status: 'OK'});
};

module.exports = updateRate;