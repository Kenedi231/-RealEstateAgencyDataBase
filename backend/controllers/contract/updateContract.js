const contractModel = require('../../models/contractModel');


const updateContract = async (req, res, next) => {
    const {apartmentid, ownerid, employerid, roommates, date, validity} = req.body;
    const id = parseInt(req.params.id);
    const updateContract = await contractModel.update([apartmentid, ownerid, employerid, roommates, date, validity], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateContract;