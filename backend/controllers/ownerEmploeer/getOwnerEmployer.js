const ownerModel = require('../../models/ownerModel');
const employerModel = require('../../models/employerModel');

const getOwnerEmployer = async (req, res, next) => {
    const isOwner = req.baseUrl === '/owner';
    const dataById = isOwner ? await ownerModel.getInnerData() : await employerModel.getInnerData();

    res.status(200).json(dataById)
};

module.exports = getOwnerEmployer;