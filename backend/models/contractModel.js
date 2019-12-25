const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');

const contractModel = new DBModel(databaseName.contract, 'apartmentid, ownerid, employerid, roommates, date, validity');

module.exports = contractModel;