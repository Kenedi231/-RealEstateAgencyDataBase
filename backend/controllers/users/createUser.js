const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');

const createUser = async (req, res, next) => {
    const {username, password, access, agentid} = req.body;
    const dataNameUserData = '(username, password, access, agentid)';
    const valuesUserData = getStringValues(dataNameUserData);
    const newUserData = await databaseModel.createNewDataInTable(databaseName.userData, dataNameUserData, valuesUserData, [username, password, access, agentid]);
    if (!newUserData) { return next(); }

    res.status(200).json(newUserData.rows[0]);
};

module.exports = createUser;