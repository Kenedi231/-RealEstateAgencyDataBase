const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createContractWithAgency = async (req, res, next) => {
    const {apartmentid, ownerid, agentid, rateid, date} = req.body;
    const dataName = '(apartmentid, ownerid, agentid, rateid, date)';
    const values = getStringValues(dataName);
    const newUserData = await databaseModel.createNewDataInTable(databaseName.contractWithAgency, dataName, values, [apartmentid, ownerid, agentid, rateid, date]);

    res.status(200).json(newUserData.rows[0]);
};

module.exports = createContractWithAgency;