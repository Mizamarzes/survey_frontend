import React, { useState } from "react";
import "./Register.css";
import "../../App.css";
import { Link } from "react-router-dom";
import Axios from "axios";

// Import our assets
import logo from "../../LoginAssets/logo.png";

// Import our icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {
  // UseState to hold our inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Onclick let us get what the user has entered
  const createUser = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    Axios.post("http://localhost:8080/auth/register", {
      username: username, // Cambié Username a username
      password: password, // Cambié Password a password
      roles: ["USER"], // Si el backend requiere un campo roles, puedes asignar un valor predeterminado
    })
      .then(() => {
        console.log("User Created Successfully!");
      })
      .catch((error) => {
        console.error("There was an error creating the user:", error);
      });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <div className="textDiv">
            <h2 className="title">Create and Answer Extraordinary Surveys</h2>
            <p>
              A well-designed survey is the key to unlocking valuable insightse!
            </p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setUsername(event.target.value);
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
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            {/*<span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
