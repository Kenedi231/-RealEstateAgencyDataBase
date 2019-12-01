const databaseModel = require('../../models/db');

const getUserById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const dataById = await databaseModel.getUsersById(id);

    res.status(200).json(dataById);
};

module.exports = getUserById;