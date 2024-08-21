import React, { useEffect } from "react";
import "./SignupPage.css";
import { useState } from "react";
import { useCreateUserMutation } from "../features/user/userApiSlice";

const SignupPage = () => {
    const [createUser, { data, error, isLoading }] = useCreateUserMutation();
    const [newUserData, setNewUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState({
        firstnameError: "",
        lastnameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
    });

    if (error) {
        console.log(error);
        return <h1>Error</h1>;
    }

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if (data) {
        console.log("User Created!", data);
    }

    const validateInput = async (e) => {
        const { name, value } = e.target;
        setNewUserData((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
        const nonEmptyFields = Object.entries(newUserData).filter(
            ([key, value]) => value.trim() !== ""
        );
        const dataToSend = Object.fromEntries(nonEmptyFields);
        if (Object.keys(dataToSend).length > 0) {
            console.log("NEW USER", dataToSend);
        }
        // CREATE FRONTEND VALIDATIONS HERE!!!!! use FORMIK + YUP, read documentation. 
    }, [newUserData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.getElementById("signupForm");
        const formData = new FormData(form);
        const formDataObj = {};

        // Turn to an object accepted by useState
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        // Frontend Validations
        if (formDataObj.password !== formDataObj.confirmPassword) {
            setErrorMessage((prevState) => ({
                ...prevState,
                passwordError: "Password do not match!",
                confirmPasswordError: "Password do not match!",
            }));
            return;
        }

        // console.log("FORM DATA", formDataObj);
        // console.log("ERROR DATA", errorMessage);
        setNewUserData(formDataObj);
    };

    return (
        <section id="signup">
            <h1>Small Circle</h1>
            <form id="signupForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    value={newUserData.firstname}
                    onChange={validateInput}
                />
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    value={newUserData.lastname}
                    onChange={validateInput}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={newUserData.email}
                    onChange={validateInput}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={newUserData.password}
                    onChange={validateInput}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={newUserData.confirmPassword}
                    onChange={validateInput}
                />
                <input
                    type="submit"
                    id="signup"
                    value="Sign Up"
                    className="active submitBtn"
                />
            </form>
            <button
                className="inactive submitBtn"
                onClick={() => setRegister(0)}
            >
                Log In
            </button>
        </section>
    );
};

export default SignupPage;
