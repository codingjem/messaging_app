const express = require("express");
const router = express.Router();
const validateInputs = require("./middleware/validateUser");
const usersController = require("./controllers/usersController");

router.get("/", (req, res) => {});
router.post("/user/createUser", validateInputs, usersController.createUser);

module.exports = router;
