const DBModel = require('../pattern');
const postgres = require('../databaseLink');
const databaseName = require('../constants/databaseName');

const agent = databaseName.agent;
const data = databaseName.data;

const agentModel = new DBModel(agent, 'dataid, reward');

agentModel.getAgents = () => {
    return new Promise((resolve, reject) => {
        postgres.query(`SELECT ${agent}.id, ${agent}.reward, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone FROM ${agent}, ${data} WHERE ${agent}.dataid = ${data}.id`, (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
};

agentModel.getAgentById = (id) => {
    return new Promise((resolve, reject) => {
        postgres.query(`SELECT 
            ${agent}.id, ${agent}.reward, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone 
            FROM ${agent}, ${data} 
            WHERE ${agent}.dataid = ${data}.id AND ${agent}.id = $1`, [id],
            (err, results) => {
                if (err) return reject(err);

                resolve(results.rows);
            });
    })
};

module.exports = agentModel;