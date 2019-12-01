const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updateUser = async (req, res, next) => {
    const {username, password, access, agentid} = req.body;
    const id = parseInt(req.params.id);
    const dataName = 'username, password, access, agentid';
    const values = getUpdateStrings(dataName);
    const newUserData = await databaseModel.updateDataInTable(databaseName.userData, values,[username, password, access, agentid], id);
    if (!newUserData) return next();

    res.status(200).json({status: 'OK'});
};

module.exports = updateUser;