const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
        // console.log("ERRORS!!", errors);
    }
    const { firstname, lastname, email, password } = req.body;
    try {
        // encrypt password
        const hashedPwd = await bcrypt.hash(password, 10);

        const newUser = {
            firstname,
            lastname,
            email,
            password: hashedPwd,
        };
        const result = await usersModel.createUser(newUser);
        res.status(200).json({
            message: `${result.firstname}'s account is created Successfully!`,
        });
    } catch (err) {
        console.error(err);
    }
};

module.exports = { createUser };
