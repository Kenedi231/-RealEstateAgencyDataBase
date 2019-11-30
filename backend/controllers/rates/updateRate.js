const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');

const updateRate = async (req, res, next) => {
    const {name, count, reward} = req.body;
    const id = parseInt(req.params.id);
    const dataName = 'name, count, reward';
    const values = getUpdateStrings(dataName);
    const newRate = await databaseModel.updateDataInTable(databaseName.rate, values,[name, count, reward], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateRate;