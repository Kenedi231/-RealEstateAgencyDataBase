const userModel = require('../../models/userModel');

const getUsers = async (req, res, next) => {
    const userList = await userModel.get();
    res.status(200).json(userList)
};

module.exports = getUsers;