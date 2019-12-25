const apartmentModel = require('../../models/apartmentModel');

const deleteApartment = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await apartmentModel.delete(id);

    res.status(200).json(status);
};

module.exports = deleteApartment;