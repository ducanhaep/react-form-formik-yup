import { useState } from "react";
import "./signup.css";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      name,
      phone,
      password,
    };
    console.log(newUser);
  };
  return (
    <section>
      <form className="infoform" onSubmit={handleSubmit}>
        <label htmlFor="">Your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="text"
          id="confirmedpassword"
          placeholder="Enter your password"
          name="confirmedpassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label htmlFor="">Phone Number</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};
export default SignupForm;
