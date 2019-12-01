const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updateApartment = async (req, res, next) => {
    const {ownerid, rentType, houseType, district, address, countRooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, livingSpace, floor, leased, reward} = req.body;
    const id = parseInt(req.params.id);
    const dataName = 'ownerid, rent_type, house_type, district, address, count_rooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, living_space, floor, leased';
    const values = getUpdateStrings(dataName);
    const newUserData = await databaseModel.updateDataInTable(databaseName.apartment, values,[ownerid, rentType, houseType, district, address, countRooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, livingSpace, floor, leased], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateApartment;