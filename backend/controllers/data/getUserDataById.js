const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getUserDataById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const userDataById = await databaseModel.getDataFromTableById(databaseName.data, id);

    res.status(200).json(userDataById);
};

module.exports = getUserDataById;