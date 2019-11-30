const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const createOwnerEmployer = require('../controllers/ownerEmploeer/createOwnerEmployer');
const getOwnerEmployer = require('../controllers/ownerEmploeer/getOwnerEmployer');
const getOwnerEmployerById = require('../controllers/ownerEmploeer/getOwnerEmployerById');
const deleteOwnerEmployer = require('../controllers/ownerEmploeer/deleteOwnerEmployer');
const updateOwnerEmployer = require('../controllers/ownerEmploeer/updateOwnerEmployer');

router.use(timeLog);

router.post('/', asyncRoutes(createOwnerEmployer));
router.get('/', asyncRoutes(getOwnerEmployer));
router.get('/:id', asyncRoutes(getOwnerEmployerById));
router.put('/:id', asyncRoutes(updateOwnerEmployer));
router.delete('/:id', asyncRoutes(deleteOwnerEmployer));

module.exports = router;