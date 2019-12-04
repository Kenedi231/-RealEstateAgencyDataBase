const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updateContractWithAgency = async (req, res, next) => {
    const {apartmentid, ownerid, agentid, rateid, date} = req.body;
    const id = parseInt(req.params.id);
    const dataName = 'apartmentid, ownerid, agentid, rateid, date';
    const values = getUpdateStrings(dataName);
    const newUserData = await databaseModel.updateDataInTable(databaseName.contractWithAgency, values,[apartmentid, ownerid, agentid, rateid, date], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateContractWithAgency;