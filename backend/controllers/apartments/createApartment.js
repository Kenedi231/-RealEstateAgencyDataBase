const apartmentModel = require('../../models/apartmentModel');

const createApartment = async (req, res, next) => {
    const {ownerid, rentType, houseType, district, address, countRooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, livingSpace, floor, leased} = req.body;
    const newApartment = await apartmentModel.create([ownerid, rentType, houseType, district, address, countRooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, livingSpace, floor, leased]);
    if (!newApartment) { return next(); }

    res.status(200).json(newApartment.rows[0]);
};

module.exports = createApartment;