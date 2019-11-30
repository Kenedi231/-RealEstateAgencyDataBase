const Pool = require('pg').Pool;
const databaseName = require('../constants/databaseName');
const config = require('../../config');

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
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const getDataFromTableById = (dbName, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${dbName} WHERE id = $1`, [id], (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const createNewDataInTable = (dbName, dataName, values, data) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO ${dbName} ${dataName} VALUES ${values} RETURNING id`, [...data] ,(err, results) => {
            if (err) return reject(err);

            resolve(results);
        });
    })
};

const updateDataInTable = (dbName, values, data, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE ${dbName} ${values}`, [...data, id] ,(err, results) => {
            if (err) return reject(err);

            resolve(results);
        });
    })
};

const deleteDataFromTableById = (dbName, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM ${dbName} WHERE id = $1`, [id], (err, results) => {
            if (err) return reject(err);

            resolve({status: 'OK'});
        });
    })
};

const getOwnerEmployer = (dbName) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT ${dbName}.id, ${databaseName.data}.fullname, ${databaseName.data}.address, ${databaseName.data}.passport, ${databaseName.data}.phone FROM owner, ${databaseName.data} WHERE owner.dataid = ${databaseName.data}.id`, (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const getOwnerEmployerById = (dbName, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT ${dbName}.id, ${databaseName.data}.fullname, ${databaseName.data}.address, ${databaseName.data}.passport, ${databaseName.data}.phone FROM owner, ${databaseName.data} WHERE owner.dataid = ${databaseName.data}.id AND owner.id = ${id}`, (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const databaseModel = {
    getTableByName,
    getDataFromTableById,
    createNewDataInTable,
    updateDataInTable,
    deleteDataFromTableById,
    getOwnerEmployer,
    getOwnerEmployerById,
};

module.exports = databaseModel;