const databaseModel = require('../../models/db');

const getUsers = async (req, res, next) => {
    console.log(1);
    const userList = await databaseModel.getUsers();

    res.status(200).json(userList)
};

module.exports = getUsers;