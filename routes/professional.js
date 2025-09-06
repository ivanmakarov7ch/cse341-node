
//For local
/*const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professional');

router.get('/', professionalController.getProfessional);

module.exports = router;
*/


const express = require('express');
const router = express.Router();
const mongodb = require('../db/database');

router.get('/', async (req, res) => {
    try {
        const db = mongodb.getDatabase(); // get DB instance
        const professional = await db.collection('professionals').findOne({});
        res.json(professional);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching professional data" });
    }
});

module.exports = router;
