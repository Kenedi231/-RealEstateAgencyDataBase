const dataModel = require('../../models/dataModel');
const agentModel = require('../../models/agentModel');

const deleteAgent = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const table = await agentModel.getById(id);
    await agentModel.delete(id);
    const status = await dataModel.delete(table.dataid);

    res.status(200).json(status);
};

module.exports = deleteAgent;