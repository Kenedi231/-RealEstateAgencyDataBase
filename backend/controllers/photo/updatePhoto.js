const photoModel = require('../../models/photoModel');


const updatePhoto = async (req, res, next) => {
    const {name, path} = req.body;
    const id = parseInt(req.params.id);
    const parsePath = `{${path}}`;
    const newPhoto = await photoModel.update([name, parsePath], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updatePhoto;