const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createApartment = async (req, res, next) => {
    const {ownerid, rentType, houseType, district, address, countRooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, livingSpace, floor, leased} = req.body;
    const dataNameUserData = '(ownerid, rent_type, house_type, district, address, count_rooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, living_space, floor, leased)';
    const valuesUserData = getStringValues(dataNameUserData);
    const newApartment = await databaseModel.createNewDataInTable(databaseName.apartment, dataNameUserData, valuesUserData, [ownerid, rentType, houseType, district, address, countRooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, livingSpace, floor, leased]);
    if (!newApartment) { return next(); }

    res.status(200).json(newApartment.rows[0]);
};

module.exports = createApartment;