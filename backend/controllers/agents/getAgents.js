const databaseModel = require('../../models/db');

const getAgents = async (req, res, next) => {
    const dataById = await databaseModel.getAgents();

    res.status(200).json(dataById)
};

module.exports = getAgents;