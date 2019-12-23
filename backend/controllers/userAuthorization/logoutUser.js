const sessionModel = require('../../models/sessionModel');

const logoutUser = async (req, res, next) => {
    const status = await sessionModel.deleteByData('token', req.token);
    if (!status) { next() }

    res.status(200).json({
        success: true,
        status: 'OK'
    });
};

module.exports = logoutUser;