const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createPhoto = async (req, res, next) => {
    const {name, path} = req.body;
    const pathParse = `{${path}}`;
    const dataName = '(name, path)';
    const values = getStringValues(dataName);
    const newPhoto = await databaseModel.createNewDataInTable(databaseName.photo, dataName, values, [name, pathParse]);

    res.status(200).json(newPhoto.rows[0]);
};

module.exports = createPhoto;