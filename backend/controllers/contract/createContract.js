const contractModel = require('../../models/contractModel');

const createContract = async (req, res, next) => {
    const {apartmentid, ownerid, employerid, roommates, date, validity} = req.body;
    const newContract = await contractModel.create([apartmentid, ownerid, employerid, roommates, date, validity]);

    res.status(200).json(newContract.rows[0]);
};

module.exports = createContract;