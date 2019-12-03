const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getStringValues = require('../../utils/getStringValues');
const config = require('../../../config');
const jwt = require('jsonwebtoken');

const sendAuthorizationData = async (req, res, next) => {
    const {userName, password} = req.body;
    const user = await databaseModel.getUserByData(userName, password);
    if (!user.length) {
        return next({
            status: 'forbidden',
            code: 403,
            message: 'Incorrect username or password',
        });
    }
    const token = await jwt.sign({id: user[0].id}, config.secret);
    const dataNameUserData = '(token, user_id)';
    const valuesUserData = getStringValues(dataNameUserData);
    const session = await databaseModel.createNewDataInTable(databaseName.session, dataNameUserData, valuesUserData, [token, user[0].id]);
    if (!session) {
        return next();
    }
    res.status(200).json({token, username: user[0].username, id: user[0].id});
};

module.exports = sendAuthorizationData;