const db = require("../config/database");

const getAllUsers = () => {
    return db.query("SELECT * FROM user");
};

const getUserById = () => {
    return db.query("SELECT * FROM user WHERE id = ?", [id]);
};

const createUser = ({ firstname, lastname, email, password }) => {
    const query =
        "INSERT INTO user (firstname, lastname, email, password, create_time) VALUES (?, ?, ?, ?, NOW())";
    db.query(query, [firstname, lastname, email, password]);
    return { firstname };
};

module.exports = { getAllUsers, getUserById, createUser };
