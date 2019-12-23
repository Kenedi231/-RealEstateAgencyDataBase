const userModel = require('../../models/userModel');

const createUser = async (req, res, next) => {
    const {username, password, access, agentid} = req.body;
    const newUserData = await userModel.create([username, password, access, agentid]);
    if (!newUserData) { return next(); }

    res.status(200).json(newUserData.rows[0]);
};

module.exports = createUser;