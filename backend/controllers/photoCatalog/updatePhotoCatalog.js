const photoCatalogModel = require('../../models/photoCatalogModel');


const updatePhotoCatalog = async (req, res, next) => {
    const {
        photos,
        schema,
        number,
        year_of_construction,
        furniture,
        appliances,
        add_info,
        year_overhaul,
    } = req.body;
    const id = parseInt(req.params.id);
    const newPhotoCatalog = await photoCatalogModel.update([
        photos,
        schema,
        number,
        year_of_construction,
        furniture,
        appliances,
        add_info,
        year_overhaul,
    ], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updatePhotoCatalog;