const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createUserData = async (req, res, next) => {
    const {fullName, address, passport, phone} = req.body;
    const dataName = '(fullname, address, passport, phone)';
    const values = getStringValues(dataName);
    const newUserData = await databaseModel.createNewDataInTable(databaseName.data, dataName, values, [fullName, address, passport, phone]);

    res.status(200).json(newUserData.rows[0]);
};

module.exports = createUserData;