const moment = require('moment');

const timeLog = (req, res, next) => {
    console.log(`Time:  ${moment(Date.now()).format('HH:mm:ss')}`);
    next();
};

module.exports = timeLog;