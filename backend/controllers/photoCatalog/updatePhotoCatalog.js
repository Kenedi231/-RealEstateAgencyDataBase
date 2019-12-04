const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updatePhotoCatalog = async (req, res, next) => {
    console.log(req.body);
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
    const dataName = 'photos, schema, number, year_of_construction, furniture, appliances, add_info, year_overhaul';
    const values = getUpdateStrings(dataName);
    const newPhotoCatalog = await databaseModel.updateDataInTable(databaseName.photoCatalog, values,[
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