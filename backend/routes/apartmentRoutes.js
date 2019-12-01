const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const getApartments = require('../controllers/apartments/getApartments');
const createApartment = require('../controllers/apartments/createApartment');
const deleteApartment = require('../controllers/apartments/deleteApartment');
const getApartmentById = require('../controllers/apartments/getApartmentById');
const updateApartment = require('../controllers/apartments/updateApartment');

router.use(timeLog);

router.get('/', asyncRoutes(getApartments));
router.post('/', asyncRoutes(createApartment));
router.delete('/:id', asyncRoutes(deleteApartment));
router.get('/:id', asyncRoutes(getApartmentById));
router.put('/:id', asyncRoutes(updateApartment));

module.exports = router;