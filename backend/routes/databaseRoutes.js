const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const getApartments = require('../controllers/getApartments');

router.use(timeLog);

router.get('/apartments', asyncRoutes(getApartments));

module.exports = router;