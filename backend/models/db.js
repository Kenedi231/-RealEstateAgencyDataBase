const Pool = require('pg').Pool;
const databaseName = require('../constants/databaseName');
const config = require('../../config');

const {agent, data, userData} = databaseName;

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

const deleteDataFromTableByData = (dbName, field, data) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM ${dbName} WHERE ${field} = $1`, [data], (err, results) => {
            if (err) return reject(err);

            resolve({status: 'OK'});
        });
    })
};

const getOwnerEmployer = (dbName) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT ${dbName}.id, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone FROM ${dbName}, ${data} WHERE ${dbName}.dataid = ${data}.id`, (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const getAgents = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT ${agent}.id, ${agent}.reward, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone FROM ${agent}, ${data} WHERE ${agent}.dataid = ${data}.id`, (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const getUsers = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT 
            ${userData}.id, ${userData}.username, ${userData}.access, ${agent}.reward, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone 
            FROM ${userData}, ${agent}, ${data} 
            WHERE ${userData}.agentid = ${agent}.id AND ${agent}.dataid = ${data}.id`,
        (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};


const getUsersById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT 
            ${userData}.id, ${userData}.username, ${userData}.access, ${agent}.reward, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone 
            FROM ${userData}, ${agent}, ${data} 
            WHERE ${userData}.agentid = ${agent}.id AND ${agent}.dataid = ${data}.id AND ${userData}.id = ${id}`,
        (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const getOwnerEmployerById = (dbName, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT 
            ${dbName}.id, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone 
            FROM ${dbName}, ${data} 
            WHERE ${dbName}.dataid = ${data}.id AND ${dbName}.id = ${id}`,
        (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const getAgentById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT 
            ${agent}.id, ${agent}.reward, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone 
            FROM ${agent}, ${data} 
            WHERE ${agent}.dataid = ${data}.id AND ${agent}.id = ${id}`,
        (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

const getUserByData = (username, password) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${userData} WHERE ${userData}.username = '${username}' AND ${userData}.password = '${password}'`,
            (err, results) => {
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
    getAgents,
    getAgentById,
    getUsers,
    getUsersById,
    getUserByData,
    deleteDataFromTableByData,
};

module.exports = databaseModel;