const agentModel = require('../../models/agentModel');

const getAgentById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const dataById = await agentModel.getAgentById(id);

    res.status(200).json(dataById);
};

module.exports = getAgentById;