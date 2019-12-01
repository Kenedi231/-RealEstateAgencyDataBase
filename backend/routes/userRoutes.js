const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const createUser = require('../controllers/users/createUser');
const getUsers = require('../controllers/users/getUsers');
const getUserById = require('../controllers/users/getUserById');
const deleteUser = require('../controllers/users/deleteUser');
const updateUser = require('../controllers/users/updateUser');

router.use(timeLog);

router.get('/', asyncRoutes(getUsers));
router.post('/', asyncRoutes(createUser));
router.get('/:id', asyncRoutes(getUserById));
router.delete('/:id', asyncRoutes(deleteUser));
router.put('/:id', asyncRoutes(updateUser));

module.exports = router;