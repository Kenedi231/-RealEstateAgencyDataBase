const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updatePhoto = async (req, res, next) => {
    const {name, path} = req.body;
    const id = parseInt(req.params.id);
    const parsePath = `{${path}}`;
    const dataName = 'name, path';
    const values = getUpdateStrings(dataName);
    const newPhoto = await databaseModel.updateDataInTable(databaseName.photo, values,[name, parsePath], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updatePhoto;