const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const createAgent = require('../controllers/agents/createAgent');
const getAgents = require('../controllers/agents/getAgents');
const getAgentById = require('../controllers/agents/getAgentById');
const updateAgent = require('../controllers/agents/updateAgent');
const deleteAgent = require('../controllers/agents/deleteAgent');

router.use(timeLog);

router.post('/', asyncRoutes(createAgent));
router.get('/', asyncRoutes(getAgents));
router.get('/:id', asyncRoutes(getAgentById));
router.put('/:id', asyncRoutes(updateAgent));
router.delete('/:id', asyncRoutes(deleteAgent));

module.exports = router;