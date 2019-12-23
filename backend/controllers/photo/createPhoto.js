const photoModel = require('../../models/photoModel');

const createPhoto = async (req, res, next) => {
    const {name, path} = req.body;
    const pathParse = `{${path}}`;
    const newPhoto = await photoModel.create([name, pathParse]);

    res.status(200).json(newPhoto.rows[0]);
};

module.exports = createPhoto;