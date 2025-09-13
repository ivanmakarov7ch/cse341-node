const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

//This are 5 endpoints of RESTfull
router.get("/", usersController.getAll);
router.get("/:id", usersController.getSingle); //Retrieve R of CRUD
//------HTTP routes
router.post("/", usersController.createUser); //Create C of CRUDE
router.put("/:id", usersController.updateUser); //Update U of CRUD
router.delete("/:id", usersController.deleteUser); //Delete D of CRUD

module.exports = router;
