const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');
const postgres = require('../databaseLink');

const owner = databaseName.owner;
const data = databaseName.data;

const ownerModel = new DBModel(owner, 'dataid');

ownerModel.getInnerData = () => {
    return new Promise((resolve, reject) => {
        postgres.query(`SELECT ${owner}.id, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone FROM ${owner}, ${data} WHERE ${owner}.dataid = ${data}.id`, (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
}

module.exports = ownerModel;