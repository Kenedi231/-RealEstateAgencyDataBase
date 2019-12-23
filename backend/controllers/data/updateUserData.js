const dataModel = require('../../models/dataModel');

const updateUserData = async (req, res, next) => {
    const {fullname, address, passport, phone} = req.body;
    const id = parseInt(req.params.id);
    const newUserData = await dataModel.update([fullname, address, passport, phone], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateUserData;