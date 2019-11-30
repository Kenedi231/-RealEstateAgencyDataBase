const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getOwnerEmployer = async (req, res, next) => {
    const tableName = req.baseUrl === '/owner' ? databaseName.owner : databaseName.employer;
    const dataById = await databaseModel.getOwnerEmployer(tableName);

    res.status(200).json(dataById)
};

module.exports = getOwnerEmployer;