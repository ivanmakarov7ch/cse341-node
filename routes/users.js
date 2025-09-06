//Not fake
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

module.exports = router;






/*
// Temporary FAKE ROUTE
const express = require('express');
const router = express.Router();


const fakeUsers = [
    { _id: "1", name: "Alice", email: "alice@example.com" },
    { _id: "2", name: "Bob", email: "bob@example.com" }
];


router.get('/', (req, res) => {
    res.json(fakeUsers);
});

// GET single user by ID
router.get('/:id', (req, res) => {
    const user = fakeUsers.find(u => u._id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

module.exports = router;
*/