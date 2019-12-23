const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');

const photoCatalogModel = new DBModel(databaseName.photoCatalog, 'photos, schema, number, year_of_construction, furniture, appliances, add_info, year_overhaul');

module.exports = photoCatalogModel;