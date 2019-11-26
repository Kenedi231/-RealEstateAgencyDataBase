const Pool = require('pg').Pool;
const config = require('../../config');
const databaseName = require("../constants/databaseName");

// SELECT * FROM users ORDER BY id ASC
// SELECT * FROM users WHERE id = $1
// INSERT INTO users (name, email) VALUES ($1, $2)
// 'UPDATE users SET name = $1, email = $2 WHERE id = $3',
const pool = new Pool({
    user: config.userDatabase,
    host: config.hostDatabase,
    database: config.databaseName,
    password: config.passwordDatabase,
    port: config.portDatabase,
});

const getTableByName = (dbName) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${dbName} ORDER BY id ASC`, (err, results) => {
            if (err) reject(err);

            resolve(results.rows);
        });
    })
};

const getDataFromTableById = (dbName, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${dbName} WHERE id = $1`, [id], (err, results) => {
            if (err) reject(err);

            resolve(results.rows);
        });
    })
};

const createRate = (rateData) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO ${databaseName.rate} (name, count, reward) VALUES ($1, $2, $3) RETURNING id`, [...rateData] ,(err, results) => {
            if (err) reject(err);

            resolve(results);
        });
    })
};

const updateRate = (dbName, id, data) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE ${dbName} SET name = $1, count = $2, reward = $3 WHERE id = $4`, [...data, id] ,(err, results) => {
            if (err) reject(err);

            resolve(results);
        });
    })
};

const deleteDataFromTableById = (dbName, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM ${dbName} WHERE id = $1`, [id], (err, results) => {
            if (err) reject(err);

            resolve({status: 'OK'});
        });
    })
};

const databaseModel = {
    getTableByName,
    getDataFromTableById,
    createRate,
    updateRate,
    deleteDataFromTableById,
};

module.exports = databaseModel;