const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getOwnerEmployerById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const tableName = req.baseUrl === '/owner' ? databaseName.owner : databaseName.employer;
    const dataById = await databaseModel.getOwnerEmployerById(tableName, id);

    res.status(200).json(dataById);
};

module.exports = getOwnerEmployerById;