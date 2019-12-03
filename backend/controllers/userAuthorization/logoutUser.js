const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');

const logoutUser = async (req, res, next) => {
    const status = await databaseModel.deleteDataFromTableByData(databaseName.session, 'token', req.token);
    if (!status) { next() }

    res.status(200).json({
        success: true,
        status: 'OK'
    });
};

module.exports = logoutUser;