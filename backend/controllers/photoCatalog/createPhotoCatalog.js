const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

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
    const dataName = '(photos, schema, number, year_of_construction, furniture, appliances, add_info, year_overhaul)';
    const values = getStringValues(dataName);
    const newPhotoCatalog = await databaseModel.createNewDataInTable(databaseName.photoCatalog, dataName, values, [
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