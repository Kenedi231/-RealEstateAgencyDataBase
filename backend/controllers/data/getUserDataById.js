const dataModel = require('../../models/dataModel');

const getUserDataById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const userDataById = await dataModel.getById(id);

    res.status(200).json(userDataById);
};

module.exports = getUserDataById;