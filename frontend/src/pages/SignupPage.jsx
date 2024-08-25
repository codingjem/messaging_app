import React, { useEffect } from "react";
import "./SignupPage.css";
import { useCreateUserMutation } from "../features/user/userApiSlice";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/input_fields/MyTextInput";

const SignupPage = () => {
    const [createUser, { data, error, isLoading }] = useCreateUserMutation();
    if (data) {
        console.log("DATA FROM BACKEND", data);
    }
    if (error) {
        console.log("Error FROM BACKEND", error);
    }
    return (
        <>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={Yup.object({
                    firstname: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required"),
                    lastname: Yup.string()
                        .max(20, "Must be 20 characters or less")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    password: Yup.string()
                        .min(8, "Password must be at least 8 characters")
                        .required("Required"),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref("password")], "Passwords must match")
                        .required("Required"),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        await createUser(values).unwrap();
                        // console.log("VALUES", values);
                    } catch (err) {
                        console.error("Error", err);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                <Form className="signup-form">
                    <MyTextInput
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                    />

                    <MyTextInput
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                    />

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
                    <MyTextInput
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            {data && <div>{data.message}</div>}
        </>
    );
};

export default SignupPage;
