const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');

const contractWithAgencyModel = new DBModel(databaseName.contractWithAgency, 'apartmentid, ownerid, agentid, rateid, date');

module.exports = contractWithAgencyModel;