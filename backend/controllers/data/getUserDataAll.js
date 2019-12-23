const dataModel = require('../../models/dataModel');

const getUserDataAll = async (req, res, next) => {
    const userData = await dataModel.get();

    res.status(200).json(userData)
};

module.exports = getUserDataAll;