const photoCatalogModel = require('../../models/photoCatalogModel');

const deletePhotoCatalog = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await photoCatalogModel.delete(id);

    res.status(200).json(status);
};

module.exports = deletePhotoCatalog;