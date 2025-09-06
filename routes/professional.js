//Original
const express = require('express');
const router = express.Router();
const mongodb = require('../db/database');

router.get('/', async (req, res) => {
    const db = mongodb.getDatabase();                                       // get DB instance
    const professional = await db.collection('contacts').findOne({}); // collection name  // fetch first document
    res.json(professional);                                                 // send JSON to frontend
});

module.exports = router;


//For local
/*const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professional');

router.get('/', professionalController.getProfessional);

module.exports = router;
*/
