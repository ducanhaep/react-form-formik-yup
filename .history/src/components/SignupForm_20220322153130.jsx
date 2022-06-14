import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label htmlFor="">Your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label htmlFor="">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="text"
          id="confirmedPassword"
          placeholder="Enter your password"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
        />

        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};
export default SignupForm;
