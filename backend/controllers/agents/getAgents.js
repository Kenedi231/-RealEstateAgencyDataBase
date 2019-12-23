const agentModel = require('../../models/agentModel');

const getAgents = async (req, res, next) => {
    const dataById = await agentModel.getAgents();

    res.status(200).json(dataById)
};

module.exports = getAgents;