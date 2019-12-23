const dataModel = require('../../models/dataModel');

const deleteUserData = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await dataModel.delete(id);

    res.status(200).json(status);
};

module.exports = deleteUserData;