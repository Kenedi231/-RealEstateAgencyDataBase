
const sendAuthorizationData = async (req, res, next) => {
    const {userName, password} = req.body;
    console.log(req.body);
    console.log(userName, password);

    res.status(200).json({status: 'OK'});
};

module.exports = sendAuthorizationData;