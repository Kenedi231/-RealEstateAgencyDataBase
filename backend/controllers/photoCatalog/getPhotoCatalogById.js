const photoCatalogModel = require('../../models/photoCatalogModel');

const getPhotoCatalogById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const photoById = await photoCatalogModel.getById(id);

    res.status(200).json(photoById);
};

module.exports = getPhotoCatalogById;