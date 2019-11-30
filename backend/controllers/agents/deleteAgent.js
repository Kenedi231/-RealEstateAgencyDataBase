const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const deleteAgent = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const table = await databaseModel.getDataFromTableById(databaseName.agent, id);
    const status = await new Promise.all([
        await databaseModel.deleteDataFromTableById(databaseName.data, table.dataid),
        await databaseModel.deleteDataFromTableById(databaseName.agent, id)
    ]);

    res.status(200).json(status);
};

module.exports = deleteAgent;