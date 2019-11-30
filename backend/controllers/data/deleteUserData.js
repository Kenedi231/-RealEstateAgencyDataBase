const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const deleteUserData = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await databaseModel.deleteDataFromTableById(databaseName.data, id);

    res.status(200).json(status);
};

module.exports = deleteUserData;