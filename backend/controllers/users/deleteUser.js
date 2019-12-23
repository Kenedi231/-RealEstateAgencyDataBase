const userModel = require('../../models/userModel');

const deleteUser = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await userModel.delete(id);

    res.status(200).json(status);
};

module.exports = deleteUser;