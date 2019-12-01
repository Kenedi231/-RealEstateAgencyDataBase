const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const createContract = require('../controllers/contract/createContract');
const getContract = require('../controllers/contract/getContract');
const getContractById = require('../controllers/contract/getContractById');
const deleteContract = require('../controllers/contract/deleteContract');
const updateContract = require('../controllers/contract/updateContract');

router.use(timeLog);

router.post('/', asyncRoutes(createContract));
router.get('/', asyncRoutes(getContract));
router.get('/:id', asyncRoutes(getContractById));
router.delete('/:id', asyncRoutes(deleteContract));
router.put('/:id', asyncRoutes(updateContract));

module.exports = router;