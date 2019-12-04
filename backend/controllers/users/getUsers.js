const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const getUsers = async (req, res, next) => {
    const userList = await databaseModel.getTableByName(databaseName.userData);
    res.status(200).json(userList)
};

module.exports = getUsers;