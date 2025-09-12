//Not fake

const express = require('express');
const router = express.Router();
const controlControllers = require('../controllers/control');

// Define routes
router.get('/', controlControllers.frontend);
router.get('/greeting', controlControllers.greeting);
router.use('/users', require('./users'));
router.use('/professional', require('./professional'));

module.exports = router;


/*
// Temporary FAKE ROUTE
const express = require('express');
const router = express.Router();
const controlControllers = require('../controllers/control');

router.get('/', controlControllers.frontend);
router.get('/greeting', controlControllers.greeting);

// Temporary fake users API
router.use('/users', require('./users'));

// Professional API
router.use('/professional', require('./professional'));

module.exports = router;
*/
