const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const logoutUser = require('../controllers/userAuthorization/logoutUser');

router.use(timeLog);

router.post('/', asyncRoutes(logoutUser));


module.exports = router;