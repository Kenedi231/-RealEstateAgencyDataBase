const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');

const userModel = new DBModel(databaseName.userData, 'username, password, access, agentid');

module.exports = userModel;