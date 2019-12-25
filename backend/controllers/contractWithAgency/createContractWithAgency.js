const contractWithAgencyModel = require('../../models/contractWithAgencyModel');

const createContractWithAgency = async (req, res, next) => {
    const {apartmentid, ownerid, agentid, rateid, date} = req.body;
    const newUserData = await contractWithAgencyModel.create([apartmentid, ownerid, agentid, rateid, date]);

    res.status(200).json(newUserData.rows[0]);
};

module.exports = createContractWithAgency;