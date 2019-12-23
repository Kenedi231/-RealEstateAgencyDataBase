const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');

const photoModel = new DBModel(databaseName.photo, 'name, path');

module.exports = photoModel;