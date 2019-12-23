const userModel = require('../../models/userModel');


const updateUser = async (req, res, next) => {
    const {username, password, access, agentid} = req.body;
    const id = parseInt(req.params.id);
    const newUserData = await userModel.update([username, password, access, agentid], id);
    if (!newUserData) return next();

    res.status(200).json({status: 'OK'});
};

module.exports = updateUser;