const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const createContractWithAgency = require('../controllers/contractWithAgency/createContractWithAgency');
const getContractWithAgency = require('../controllers/contractWithAgency/getContractWithAgency');
const deleteContractWithAgency = require('../controllers/contractWithAgency/deleteContractWithAgency');
const getContractWithAgencyById = require('../controllers/contractWithAgency/getContractWithAgencyById');

router.use(timeLog);

router.post('/', asyncRoutes(createContractWithAgency));
router.get('/', asyncRoutes(getContractWithAgency));
router.delete('/:id', asyncRoutes(deleteContractWithAgency));
router.get('/:id', asyncRoutes(getContractWithAgencyById));

module.exports = router;