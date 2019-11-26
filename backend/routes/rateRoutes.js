const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const getRates = require('../controllers/rates/getRates');
const createRate = require('../controllers/rates/createRate');
const getRateById = require('../controllers/rates/getRateById');
const deleteRate = require('../controllers/rates/deleteRate');
const updateRate = require('../controllers/rates/updateRate');

router.use(timeLog);

router.get('/', asyncRoutes(getRates));
router.post('/', asyncRoutes(createRate));
router.get('/:id', asyncRoutes(getRateById));
router.delete('/:id', asyncRoutes(deleteRate));
router.put('/:id', asyncRoutes(updateRate));

module.exports = router;