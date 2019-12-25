const apartmentModel = require('../../models/apartmentModel');

const getApartments = async (req, res, next) => {
    const dataById = await apartmentModel.get();

    res.status(200).json(dataById)
};

module.exports = getApartments;