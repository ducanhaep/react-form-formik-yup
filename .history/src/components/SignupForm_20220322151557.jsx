import { useState } from "react";
import { useFormik } from "formik";
import "./signup.css";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
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
