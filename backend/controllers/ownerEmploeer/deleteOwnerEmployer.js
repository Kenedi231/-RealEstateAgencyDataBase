const dataModel = require('../../models/dataModel');
const ownerModel = require('../../models/ownerModel');
const employerModel = require('../../models/employerModel');

const deleteOwnerEmployer = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const isOwner = req.baseUrl === '/owner';
    const table = isOwner ? await ownerModel.getById(id) : await employerModel.getById(id);
    await dataModel.delete(table.dataid);
    isOwner ? await ownerModel.delete(id) : await employerModel.delete(id);

    res.status(200).json({status: 'OK'});
};

module.exports = deleteOwnerEmployer;