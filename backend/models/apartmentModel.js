const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');

const apartmentModel = new DBModel(databaseName.apartment, 'ownerid, rent_type, house_type, district, address, count_rooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, living_space, floor, leased');

module.exports = apartmentModel;