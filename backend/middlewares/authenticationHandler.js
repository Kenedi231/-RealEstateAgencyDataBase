const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'] || '';
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid',
                });
            }
            req.token = token;
            req.decoded = decoded;
            next();
        })
    } else {
        return res.json({
            success: false,
            message: 'Auth token is supplied'
        })
    }
};