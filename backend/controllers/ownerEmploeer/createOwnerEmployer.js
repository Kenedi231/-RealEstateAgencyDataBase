const dataModel = require('../../models/dataModel');
const ownerModel = require('../../models/ownerModel');
const employerModel = require('../../models/employerModel');

const createOwnerEmployer = async (req, res, next) => {
    const isOwner = req.baseUrl === '/owner';
    const {fullname, address, passport, phone} = req.body;
    const newUserData = await dataModel.create([fullname, address, passport, phone]);
    if (!newUserData) { return next(); }

    let newOwnerEmployer;
    if (isOwner) {
        newOwnerEmployer = await ownerModel.create([newUserData.rows[0].id]);
    } else {
        newOwnerEmployer = await employerModel.create([newUserData.rows[0].id]);
    }
    if (!newOwnerEmployer) { return next(); }

    res.status(200).json(newOwnerEmployer.rows[0]);
};

module.exports = createOwnerEmployer;