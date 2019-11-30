const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getUserDataAll = async (req, res, next) => {
    const userData = await databaseModel.getTableByName(databaseName.data);

    res.status(200).json(userData)
};

module.exports = getUserDataAll;