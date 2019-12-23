const dataModel = require('../../models/dataModel');
const agentModel = require('../../models/agentModel');

const createAgent = async (req, res, next) => {
    const {fullname, address, passport, phone, reward} = req.body;
    const newUserData = await dataModel.create([fullname, address, passport, phone]);
    if (!newUserData) { return next(); }
    const newAgent = await agentModel.create([newUserData.rows[0].id, reward]);
    if (!newAgent) { return next(); }

    res.status(200).json(newAgent.rows[0]);
};

module.exports = createAgent;