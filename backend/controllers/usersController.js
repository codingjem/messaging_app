import { validationResult } from "express-validator";

const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(400).json(errors);
        console.log("ERRORS!!", errors);
    }
    res.status(200).json({ message: "Success" });
};

module.exports = { createUser };
