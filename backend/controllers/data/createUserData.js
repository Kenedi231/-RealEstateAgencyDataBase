const dataModel = require('../../models/dataModel');

const createUserData = async (req, res, next) => {
    const {fullname, address, passport, phone} = req.body;
    const newUserData = await dataModel.create([fullname, address, passport, phone]);

    res.status(200).json(newUserData.rows[0]);
};

module.exports = createUserData;