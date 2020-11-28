import React, { useState } from "react";
import "./Register.css";

import Axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    console.log(username);
    Axios.post("http://localhost:3001/user/register", {
      username: username,
      email: email,
      mobileno: mobileno,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="Register">
      <h1>Registration</h1>
      <div className="RegisterForm">
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Mobile_No..."
          onChange={(event) => {
            setMobile(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default Register;