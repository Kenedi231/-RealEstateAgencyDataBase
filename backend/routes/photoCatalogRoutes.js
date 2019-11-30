const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const getPhotoCatalog = require('../controllers/photoCatalog/getPhotoCatalog');
const getPhotoCatalogById = require('../controllers/photoCatalog/getPhotoCatalogById');
const deletePhotoCatalogById = require('../controllers/photoCatalog/deletePhotoCatalog');
const createPhotoCatalog = require('../controllers/photoCatalog/createPhotoCatalog');
const updatePhotoCatalog = require('../controllers/photoCatalog/updatePhotoCatalog');

router.use(timeLog);

router.get('/', asyncRoutes(getPhotoCatalog));
router.post('/', asyncRoutes(createPhotoCatalog));
router.get('/:id', asyncRoutes(getPhotoCatalogById));
router.delete('/:id', asyncRoutes(deletePhotoCatalogById));
router.put('/:id', asyncRoutes(updatePhotoCatalog));



module.exports = router;