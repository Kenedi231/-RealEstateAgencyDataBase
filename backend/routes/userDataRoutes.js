const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const createUserData = require('../controllers/data/createUserData');
const updateUserData = require('../controllers/data/updateUserData');
const getUserDataById = require('../controllers/data/getUserDataById');
const getUserDataAll = require('../controllers/data/getUserDataAll');
const deleteUserData = require('../controllers/data/deleteUserData');

router.use(timeLog);

router.post('/', asyncRoutes(createUserData));
router.get('/', asyncRoutes(getUserDataAll));
router.put('/:id', asyncRoutes(updateUserData));
router.delete('/:id', asyncRoutes(deleteUserData));
router.get('/:id', asyncRoutes(getUserDataById));

module.exports = router;