const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updateUserData = async (req, res, next) => {
    const {fullname, address, passport, phone} = req.body;
    const id = parseInt(req.params.id);
    const dataName = 'fullname, address, passport, phone';
    const values = getUpdateStrings(dataName);
    const newUserData = await databaseModel.updateDataInTable(databaseName.data, values,[fullname, address, passport, phone], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateUserData;