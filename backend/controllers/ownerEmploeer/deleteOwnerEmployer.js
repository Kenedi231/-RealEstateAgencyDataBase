const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const deleteOwnerEmployer = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const tableName = req.baseUrl === '/owner' ? databaseName.owner : databaseName.employer;
    const table = await databaseModel.getDataFromTableById(tableName, id);
    const status = await new Promise.all([
        await databaseModel.deleteDataFromTableById(databaseName.data, table.dataid),
        await databaseModel.deleteDataFromTableById(tableName, id)
    ]);

    res.status(200).json(status);
};

module.exports = deleteOwnerEmployer;