import React from "react";
import "./index.css";
import { useFormik } from "formik";

function App() {
    let errors = {};
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: (values, errors) => {
            if (!errors.email && !errors.password) {
                alert("Login Successful");
            }
            console.log("Form:", values);
        },

        validate: (values) => {
            if (!values.email) {
                errors.email = "Field required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Username should be an email";
            }

            if (!values.password) errors.password = "Field required";
            return errors;
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>Email:</div>
                <input
                    type="text"
                    id="emailField"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
                <div>Password:</div>
                <input
                    type="text"
                    id="pswField"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
                <button type="submit" id="submitBtn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
