const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createContract = async (req, res, next) => {
    const {apartmentId, ownerId, employerId, roommates, date, validity} = req.body;
    const dataName = '(apartmentid, ownerid, employerid, roommates, date, validity)';
    const values = getStringValues(dataName);
    const newContract = await databaseModel.createNewDataInTable(databaseName.contract, dataName, values, [apartmentId, ownerId, employerId, roommates, date, validity]);

    res.status(200).json(newContract.rows[0]);
};

module.exports = createContract;