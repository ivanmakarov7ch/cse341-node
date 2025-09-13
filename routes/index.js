const express = require("express");
const router = express.Router();
const controlControllers = require("../controllers/control");

// Define routes
router.get("/", controlControllers.frontend);
router.get("/greeting", controlControllers.greeting);
router.use("/users", require("./users")); //redirect to users.js
router.use("/professional", require("./professional"));
router.use("/", require("./swagger"));

module.exports = router;
