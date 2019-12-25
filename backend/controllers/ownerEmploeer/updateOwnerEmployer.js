const dataModel = require('../../models/dataModel');
const ownerModel = require('../../models/ownerModel');
const employerModel = require('../../models/employerModel');


const updateOwnerEmployer = async (req, res, next) => {
    const {fullname, address, passport, phone} = req.body;
    const id = parseInt(req.params.id);
    const isOwner = req.baseUrl === '/owner';
    const currentObj = isOwner ? await ownerModel.getById(id) : await employerModel.getById(id);
    const newUserData = await dataModel.update([fullname, address, passport, phone], currentObj[0].dataid);
    if (!newUserData) return next();

    res.status(200).json({status: 'OK'});
};

module.exports = updateOwnerEmployer;