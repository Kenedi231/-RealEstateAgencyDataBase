const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');

const rateModel = new DBModel(databaseName.rate, 'name, count, reward');

module.exports = rateModel;