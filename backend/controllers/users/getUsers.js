const databaseModel = require('../../models/db');

const getUsers = async (req, res, next) => {
    const userList = await databaseModel.getUsers();
    res.status(200).json(userList)
};

module.exports = getUsers;