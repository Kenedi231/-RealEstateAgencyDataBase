const photoModel = require('../../models/photoModel');


const getPhotoById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const photoById = await photoModel.getById(id);

    res.status(200).json(photoById);
};

module.exports = getPhotoById;