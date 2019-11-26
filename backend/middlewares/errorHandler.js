const errorHandler = function (err, req, res, next) {
    const {status = "error", code = 500, message = 'Server error'} = err;
    return res
        .status(code)
        .json({status, message});
};

module.exports = errorHandler;