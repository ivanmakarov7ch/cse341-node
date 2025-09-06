const express = require('express');
const router = express.Router();
const controlControllers = require('../controllers/control');

// Define routes
router.get('/', controlControllers.frontend);
router.get('/greeting', controlControllers.greeting);
router.use('/users', require ('./users'));
router.use('/users', require('./users'));
router.use('/professional', require('./professional'));

module.exports = router;
