// const lineReader = require('line-reader');
// const dbModel = require('./backend/models/db');
// const getStringValues = require('./backend/utils/getStringValues');
// const databaseName = require('./backend/constants/databaseName');
//
// let count = 1;
//
// lineReader.eachLine('./data/table3', async line => {
//     const dataArr = line.split(',');
//     const uploadData = [dataArr[0], dataArr[1], dataArr[3], dataArr[2]];
//     const dataNameUserData = '(fullname, address, passport, phone)';
//     const valuesUserData = getStringValues(dataNameUserData);
//     const newUserData = await dbModel.createNewDataInTable(databaseName.data, dataNameUserData, valuesUserData, [...uploadData]);
//     if (!newUserData) {throw {}}
//     console.log(count);
//     count++;
// });