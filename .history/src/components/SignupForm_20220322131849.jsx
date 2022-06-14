import { useState } from "react";
import "./signup.css";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <section>
      <form className="infoform">
        <label htmlFor="">Your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          name="name"
        />

        <label htmlFor="">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          name="password"
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="text"
          id="confirmedpassword"
          placeholder="Enter your password"
          name="confirmedpassword"
        />

        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          name="phone"
        />
      </form>
    </section>
  );
};
export default SignupForm;
