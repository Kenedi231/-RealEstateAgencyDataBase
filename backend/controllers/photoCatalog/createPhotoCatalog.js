const photoCatalogModel = require('../../models/photoCatalogModel');

const createPhotoCatalog = async (req, res, next) => {
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
    const newPhotoCatalog = await photoCatalogModel.create([
        photos,
        schema,
        number,
        year_of_construction,
        furniture,
        appliances,
        add_info,
        year_overhaul,
    ]);

    res.status(200).json(newPhotoCatalog.rows[0]);
};

module.exports = createPhotoCatalog;