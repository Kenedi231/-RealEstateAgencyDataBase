const photoCatalogModel = require('../../models/photoCatalogModel');

const getPhotoCatalog = async (req, res, next) => {
    const photoCatalog = await photoCatalogModel.get();

    res.status(200).json(photoCatalog)
};

module.exports = getPhotoCatalog;