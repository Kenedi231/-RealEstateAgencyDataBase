const config = require('../../../config');
const jwt = require('jsonwebtoken');

const sessionModel = require('../../models/sessionModel');

const sendAuthorizationData = async (req, res, next) => {
    const {userName, password} = req.body;
    const user = await sessionModel.getUser(userName, password);
    if (!user.length) {
        return next({
            status: 'forbidden',
            code: 403,
            message: 'Incorrect username or password',
        });
    }
    const token = await jwt.sign({id: user[0].id}, config.secret);
    const session = await sessionModel.create([token, user[0].id]);
    if (!session) {
        return next();
    }
    res.status(200).json({token, username: user[0].username, id: user[0].id});
};

module.exports = sendAuthorizationData;