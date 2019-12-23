const postgres = require('../databaseLink');
const getUpdateStrings = require('../utils/getUpdateStrings');
const getStringValues = require('../utils/getStringValues');

function createModel(databaseName, data) {
    this.db = databaseName;
    this.dataName = `(${data})`;
    this.dataValue = getStringValues(this.dataName);
    this.values = getUpdateStrings(data);

    this.get = () => {
        return new Promise((resolve, reject) => {
            postgres.query(`SELECT * FROM ${this.db} ORDER BY id ASC`, (err, results) => {
                if (err) return reject(err);

                resolve(results.rows);
            });
        })
    };

    this.getById = (id) => {
        return new Promise((resolve, reject) => {
            postgres.query(`SELECT * FROM ${this.db} WHERE id = $1`, [id], (err, results) => {
                if (err) return reject(err);

                resolve(results.rows);
            });
        })
    };

    this.create = (data) => {
        return new Promise((resolve, reject) => {
            postgres.query(`INSERT INTO ${this.db} ${this.dataName} VALUES ${this.dataValue} RETURNING id`, [...data] ,(err, results) => {
                if (err) return reject(err);

                resolve(results);
            });
        })
    };

    this.update = (data, id) => {
        return new Promise((resolve, reject) => {
            postgres.query(`UPDATE ${this.db} ${this.values}`, [...data, id] ,(err, results) => {
                if (err) return reject(err);

                resolve(results);
            });
        })
    };

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            postgres.query(`DELETE FROM ${this.db} WHERE id = $1`, [id], (err, results) => {
                if (err) return reject(err);

                resolve({status: 'OK'});
            });
        })
    };

    this.deleteByData = (field, data) => {
        return new Promise((resolve, reject) => {
            postgres.query(`DELETE FROM ${this.db} WHERE ${field} = $1`, [data], (err, results) => {
                if (err) return reject(err);

                resolve({status: 'OK'});
            });
        })
    };
}

module.exports = createModel;