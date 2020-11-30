import React, { useState } from "react";
import loginImg from "../login.svg";
import "./style.css";
import Axios from "axios";

function Register(props) {
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
    <div className="base-container" ref={props.containerRef}>
    <div className="header">Register</div>
    <div className="content">
      <div className="image">
        <img src={loginImg} />
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username"          
            onChange={(event) => {
            setUsername(event.target.value);
          }}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="email" 
            onChange={(event) => {
            setEmail(event.target.value);
          }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileno">Mobile Number</label>
          <input type="text" name="mobileno" placeholder="mobileno" 
            onChange={(event) => {
            setMobile(event.target.value);
          }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="password" 
            onChange={(event) => {
            setPassword(event.target.value);
          }}/>
        
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn" onClick={register}> 
        Register
      </button>
    </div>
  </div>
);
}


export default Register;