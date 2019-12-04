const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updateOwnerEmployer = async (req, res, next) => {
    const {fullname, address, passport, phone} = req.body;
    const tableName = req.baseUrl === '/owner' ? databaseName.owner : databaseName.employer;
    const id = parseInt(req.params.id);
    const currentObj = await databaseModel.getDataFromTableById(tableName, id);
    const dataName = 'fullname, address, passport, phone';
    const values = getUpdateStrings(dataName);
    const newUserData = await databaseModel.updateDataInTable(databaseName.data, values,[fullname, address, passport, phone], currentObj[0].dataid);
    if (!newUserData) return next();

    res.status(200).json({status: 'OK'});
};

module.exports = updateOwnerEmployer;