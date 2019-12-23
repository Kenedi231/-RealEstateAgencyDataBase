const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');

const dataModel = new DBModel(databaseName.data, 'fullname, address, passport, phone');

module.exports = dataModel;