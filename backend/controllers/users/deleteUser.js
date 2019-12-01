const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const deleteUser = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await databaseModel.deleteDataFromTableById(databaseName.userData, id);

    res.status(200).json(status);
};

module.exports = deleteUser;