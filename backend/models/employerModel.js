const DBModel = require('../pattern');
const databaseName = require('../constants/databaseName');
const postgres = require('../databaseLink');

const employer = databaseName.employer;
const data = databaseName.data;

const employerModel = new DBModel(employer, 'dataid');

employerModel.getInnerData = () => {
    return new Promise((resolve, reject) => {
        postgres.query(`SELECT ${employer}.id, ${data}.fullname, ${data}.address, ${data}.passport, ${data}.phone FROM ${employer}, ${data} WHERE ${employer}.dataid = ${data}.id`, (err, results) => {
            if (err) return reject(err);

            resolve(results.rows);
        });
    })
}

module.exports = employerModel;