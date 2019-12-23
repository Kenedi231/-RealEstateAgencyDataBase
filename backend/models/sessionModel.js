const DBModel = require('../pattern');
const postgres = require('../databaseLink');
const databaseName = require('../constants/databaseName');

const sessionModel = new DBModel(databaseName.session, 'token, user_id');

sessionModel.getUser = (username, password) => {
    return new Promise((resolve, reject) => {
        postgres.query(`SELECT * FROM ${databaseName.userData} WHERE ${databaseName.userData}.username = $1::text AND ${databaseName.userData}.password = $2::text`, [username, password],
            (err, results) => {
                if (err) return reject(err);

                resolve(results.rows);
            });
    })
};

module.exports = sessionModel;