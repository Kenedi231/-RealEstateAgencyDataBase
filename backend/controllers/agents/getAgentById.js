const databaseModel = require('../../models/db');

const getAgentById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const dataById = await databaseModel.getAgentById(id);

    res.status(200).json(dataById);
};

module.exports = getAgentById;