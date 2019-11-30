const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createRate = async (req, res, next) => {
    const {name, count, reward} = req.body;
    const dataName = '(name, count, reward)';
    const values = getStringValues(dataName);
    const newRate = await databaseModel.createNewDataInTable(databaseName.rate, dataName, values, [name, count, reward]);

    res.status(200).json(newRate.rows[0]) // return id
};

module.exports = createRate;