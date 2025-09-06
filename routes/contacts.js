const express = require('express');
const router = express.Router();
const mongodb = require('../db/database');
const { ObjectId } = require('mongodb');

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const db = mongodb.getDatabase();
    const contacts = await db.collection('contacts').find().toArray();
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

// GET single contact by ID
router.get('/:id', async (req, res) => {
  try {
    const db = mongodb.getDatabase();
    const contact = await db
      .collection('contacts')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching contact' });
  }
});

module.exports = router;
