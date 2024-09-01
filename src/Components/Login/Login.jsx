import React, { useEffect, useState } from "react";
import "./Login.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

// Import our assets
import logo from "../../LoginAssets/logo.png";

// Import our icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  // UseState Hook to store inputs
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();

  //Let us now show the message to the user
  const [loginStatus, setLoginStatus] = useState("");
  const [statusHolder, setstatusHolder] = useState("message");

  // Onclick let us get what the user has entered
  const loginUser = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    Axios.post("http://localhost:8080/auth/login", {
      username: loginUsername, // Cambié Username a username
      password: loginPassword, // Cambié Password a password
    })
      .then((response) => {
        console.log(response);
        if (
          response.data.message ||
          loginUsername == "" ||
          loginPassword == ""
        ) {
          // If credential don't match
          navigateTo("/"); // Navigate to the same login page
          setLoginStatus(`Credetials Don´t Exist!`);
        } else {
          // If credential match
          navigateTo("/dashboard"); // Navigate to the dashboard
        }
      })
      .catch((error) => {
        console.error("There was an error loging the user:", error);
      });
  };

  useEffect(() => {
    if (loginStatus !== "") {
      setstatusHolder("showMessage");
      setTimeout(() => {
        setstatusHolder("message");
      }, 4000); // 4 seconds
    }
  }, [loginStatus]);

  // Lets clear the form on submit
  const onSubmit = () => {
    setLoginUsername("");
    setLoginPassword("");
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <div className="textDiv">
            <h2 className="title">Create and Answer Extraordinary Surveys</h2>
            <p>
              A well-designed survey is the key to unlocking valuable insightse!
            </p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid" onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setLoginUsername(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
