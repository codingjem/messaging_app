const express = require("express");
const router = express.Router();
import validateInputs from "./middleware/validateUser";
import usersController from "./controllers/usersController";

router.get("/", (req, res) => {});
router.post("/user/createUser", validateInputs, usersController.createUser);

module.exports = router;
