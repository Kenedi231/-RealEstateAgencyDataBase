const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const sendAuthorizationData = require('../controllers/userAuthorization/sendAuthorizationData');

router.use(timeLog);

router.post('/', asyncRoutes(sendAuthorizationData));

module.exports = router;