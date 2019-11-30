const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createAgent = async (req, res, next) => {
    const {fullName, address, passport, phone, reward} = req.body;
    const dataNameUserData = '(fullname, address, passport, phone)';
    const valuesUserData = getStringValues(dataNameUserData);
    const newUserData = await databaseModel.createNewDataInTable(databaseName.data, dataNameUserData, valuesUserData, [fullName, address, passport, phone]);
    if (!newUserData) { return next(); }

    const dataNameActiveUser = '(dataid, reward)';
    const valuesActiveUser = getStringValues(dataNameActiveUser);
    const newAgent = await databaseModel.createNewDataInTable(databaseName.agent, dataNameActiveUser, valuesActiveUser, [newUserData.rows[0].id, reward]);
    if (!newAgent) { return next(); }

    res.status(200).json(newAgent.rows[0]);
};

module.exports = createAgent;