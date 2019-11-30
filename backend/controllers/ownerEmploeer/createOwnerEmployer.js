const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createOwnerEmployer = async (req, res, next) => {
    const tableName = req.baseUrl === '/owner' ? databaseName.owner : databaseName.employer;
    const {fullName, address, passport, phone} = req.body;
    const dataNameUserData = '(fullname, address, passport, phone)';
    const valuesUserData = getStringValues(dataNameUserData);
    const newUserData = await databaseModel.createNewDataInTable(databaseName.data, dataNameUserData, valuesUserData, [fullName, address, passport, phone]);
    if (!newUserData) { return next(); }

    const dataNameActiveUser = '(dataid)';
    const valuesActiveUser = getStringValues(dataNameActiveUser);
    const newOwnerEmployer = await databaseModel.createNewDataInTable(tableName, dataNameActiveUser, valuesActiveUser, [newUserData.rows[0].id]);
    if (!newOwnerEmployer) { return next(); }

    res.status(200).json(newOwnerEmployer.rows[0]);
};

module.exports = createOwnerEmployer;