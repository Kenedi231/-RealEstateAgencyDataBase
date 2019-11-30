const express = require('express');
const router = express.Router();

const asyncRoutes = require('./asyncRoutes');
const timeLog = require('../middlewares/timeLog');

const createPhoto = require('../controllers/photo/createPhoto');
const deletePhoto = require('../controllers/photo/deletePhoto');
const getPhotos = require('../controllers/photo/getPhotos');
const getPhotoById = require('../controllers/photo/getPhotoById');
const updatePhoto = require('../controllers/photo/updatePhoto');

router.use(timeLog);

router.post('/', asyncRoutes(createPhoto));
router.get('/', asyncRoutes(getPhotos));
router.get('/:id', asyncRoutes(getPhotoById));
router.delete('/:id', asyncRoutes(deletePhoto));
router.put('/:id', asyncRoutes(updatePhoto));

module.exports = router;