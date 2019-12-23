const rateModel = require('../../models/rateModel');

const updateRate = async (req, res, next) => {
    const {name, count, reward} = req.body;
    const id = parseInt(req.params.id);
    const newRate = await rateModel.update([name, count, reward], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateRate;