const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

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
        res.status(200).json(newUser);
    } catch (err) {
        console.error(err);
    }
};

module.exports = { createUser };
