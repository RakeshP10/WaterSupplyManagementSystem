import React, { useEffect, useState } from "react";
import Axios from "axios";
import loginImg from "../login.svg";
import "./style.css";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  let history = useHistory();

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        setLoginStatus(response.data.message);
        history.push("/");
      } else {
        setErrorMessage(response.data.message);
        setLoginStatus(response.data[0].username);
      }
    });
  };


  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" 
                onChange={(event) => {
                setPassword(event.target.value);
              }}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={login}>
            Login
          </button>
          <h1 style={{ color: "red" }}>{errorMessage} </h1>
        </div>
      </div>
    );
}

export default Login;