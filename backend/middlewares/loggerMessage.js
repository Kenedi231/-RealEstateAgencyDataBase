const moment = require('moment');

const loggerTimeMessage = (message) => {
    const date = Date.now();
    console.log(`[${moment(date).format('HH:mm:ss')}] ${message}`);
};

module.exports = loggerTimeMessage;