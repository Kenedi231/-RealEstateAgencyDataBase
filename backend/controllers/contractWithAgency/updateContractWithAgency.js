const contractWithAgencyModel = require('../../models/contractWithAgencyModel');

const updateContractWithAgency = async (req, res, next) => {
    const {apartmentid, ownerid, agentid, rateid, date} = req.body;
    const id = parseInt(req.params.id);
    const newUserData = await contractWithAgencyModel.update([apartmentid, ownerid, agentid, rateid, date], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateContractWithAgency;