const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updateAgent = async (req, res, next) => {
    const {fullname, address, passport, phone, reward} = req.body;
    const id = parseInt(req.params.id);
    const dataName = 'fullname, address, passport, phone';
    const currentAgent = await databaseModel.getDataFromTableById(databaseName.agent, id);
    const values = getUpdateStrings(dataName);
    const dataId = currentAgent[0].dataid;
    const newUserData = await databaseModel.updateDataInTable(databaseName.data, values,[fullname, address, passport, phone], dataId);
    if (!newUserData) return next();
    const newAgentData = 'reward';
    const valuesAgent = getUpdateStrings(newAgentData);
    const updatedAgent = await databaseModel.updateDataInTable(databaseName.agent, valuesAgent, [reward], id);
    if (!updatedAgent) return next();

    res.status(200).json({status: 'OK'});
};

module.exports = updateAgent;