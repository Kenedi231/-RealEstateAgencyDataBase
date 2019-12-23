const photoModel = require('../../models/photoModel');

const deletePhoto = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const status = await photoModel.delete(id);

    res.status(200).json(status);
};

module.exports = deletePhoto;