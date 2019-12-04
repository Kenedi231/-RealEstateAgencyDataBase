const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const createContractWithAgency = require('../controllers/contractWithAgency/createContractWithAgency');
const getContractWithAgency = require('../controllers/contractWithAgency/getContractWithAgency');
const deleteContractWithAgency = require('../controllers/contractWithAgency/deleteContractWithAgency');
const getContractWithAgencyById = require('../controllers/contractWithAgency/getContractWithAgencyById');
const updateContractWithAgency = require('../controllers/contractWithAgency/updateContractWithAgency');

router.use(timeLog);

router.post('/', asyncRoutes(createContractWithAgency));
router.get('/', asyncRoutes(getContractWithAgency));
router.delete('/:id', asyncRoutes(deleteContractWithAgency));
router.get('/:id', asyncRoutes(getContractWithAgencyById));
router.put('/:id', asyncRoutes(updateContractWithAgency));

module.exports = router;