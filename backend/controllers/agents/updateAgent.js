const agentModel = require('../../models/agentModel');
const dataModel = require('../../models/dataModel');


const updateAgent = async (req, res, next) => {
    const {fullname, address, passport, phone, reward} = req.body;
    const id = parseInt(req.params.id);
    const currentAgent = await agentModel.getById(id);
    const dataId = currentAgent[0].dataid;

    const newUserData = await dataModel.update([fullname, address, passport, phone], dataId);
    if (!newUserData) return next();

    const updatedAgent = await agentModel.update([dataId, reward], id);
    if (!updatedAgent) return next();

    res.status(200).json({status: 'OK'});
};

module.exports = updateAgent;