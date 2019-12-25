const apartmentModel = require('../../models/apartmentModel');


const updateApartment = async (req, res, next) => {
    const {ownerid, rentType, houseType, district, address, countRooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, livingSpace, floor, leased, reward} = req.body;
    const id = parseInt(req.params.id);
    const newUserData = await apartmentModel.update([ownerid, rentType, houseType, district, address, countRooms, bedrooms, bathroom, cost, prepayment, document, internet, phone, livingSpace, floor, leased], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateApartment;