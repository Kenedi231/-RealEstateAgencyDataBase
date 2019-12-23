const Pool = require('pg').Pool;
const config = require('../../config');

const pool = new Pool({
    user: config.userDatabase,
    host: config.hostDatabase,
    database: config.databaseName,
    password: config.passwordDatabase,
    port: config.portDatabase,
});

module.exports = pool;