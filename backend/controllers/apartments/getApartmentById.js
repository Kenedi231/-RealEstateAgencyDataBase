const apartmentModel = require('../../models/apartmentModel');

const getApartmentById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const dataById = await apartmentModel.getById(id);

    res.status(200).json(dataById);
};

module.exports = getApartmentById;