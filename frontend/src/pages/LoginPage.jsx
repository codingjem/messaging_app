import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useLoginUserMutation } from "../features/user/userApiSlice";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/input_fields/MyTextInput";

/* 
NOTE!!!!

1. If you click enter it should go to next input

*/

const LoginPage = () => {
    const [loginUser, { data, isError, isLoading }] = useLoginUserMutation();
    const navigate = useNavigate();

    return (
        <div id="login">
            <h1>Log In</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Email is required"),
                    password: Yup.string()
                        .min(8, "Password must be at least 8 characters")
                        .required("Password is required"),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        // await loginUser(values).unwrap();
                        console.log("VALUES", values);
                    } catch (err) {
                        console.error("Error", err);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                <Form className="login-form">
                    <MyTextInput
                        name="email"
                        type="email"
                        placeholder="Email Address"
                    />
                    <MyTextInput
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit" className="submit-btn active">
                        Log In
                    </button>
                </Form>
            </Formik>
            <p>
                New here?{" "}
                <a className="form-links" onClick={() => navigate("/signup")}>
                    Sign Up now
                </a>
            </p>
        </div>
    );
};

export default LoginPage;
